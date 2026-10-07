const express = require("express");
const cors = require("cors");

const { getMessaging } = require("firebase-admin/messaging");

require("./firebase-admin");

const app = express();

app.use(cors());
app.use(express.json());


// Receive FCM token
app.post("/api/fcm/token", (req, res) => {
    const { userId, token } = req.body;

    console.log("User ID:", userId);
    console.log("FCM Token:", token);

    res.json({
        success: true,
        message: "FCM token received",
    });
});


// Send notification
app.post("/api/fcm/send", async (req, res) => {
    try {
        const { token, title, body } = req.body;

        const message = {
            token: token,

            notification: {
                title: title,
                body: body,
            },
        };

        const response = await getMessaging().send(message);

        console.log("Notification sent:", response);

        res.json({
            success: true,
            message: "Notification sent successfully",
            data: response,
        });

    } catch (error) {
        console.error("FCM send error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to send notification",
            error: error.message,
        });
    }
});


app.listen(5000, () => {
    console.log("Backend running on port 5000");
});