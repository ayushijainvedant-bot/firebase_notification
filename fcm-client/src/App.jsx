import { getToken } from "firebase/messaging";
import { messaging } from "./firebase";

function App() {
    const enableNotifications = async () => {
        try {
            const permission = await Notification.requestPermission();

            if (permission !== "granted") {
                console.log("Notification permission denied");
                return;
            }

            // Check if service worker is already registered
            let registration = await navigator.serviceWorker.getRegistration(
                "/"
            );

            // Register only if it doesn't exist
            if (!registration) {
                registration = await navigator.serviceWorker.register(
                    "/firebase-messaging-sw.js"
                );
            }

            // Wait until service worker is active
            await navigator.serviceWorker.ready;

            console.log("Service Worker ready");

            // Get FCM token
            const token = await getToken(messaging, {
                vapidKey: "BKlX8H0K022-Nry5sznCin4insDtEu-2_Vnxrh6EgKKGrtHrv6MR-L6g5sABsFUHd3OWYpEv4HC3pivBZO-cd-o",
                serviceWorkerRegistration: registration,
            });

            console.log("FCM TOKEN:", token);

            // Send token to backend
            await fetch("http://localhost:5000/api/fcm/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: "user-101",
                    token: token,
                }),
            });

            console.log("Token sent to backend");

        } catch (error) {
            console.error("FCM error:", error);
        }
    };

    return (
        <div>
            <h1>FCM Learning</h1>

            <button onClick={enableNotifications}>
                Enable Notifications
            </button>
        </div>
    );
}

export default App;