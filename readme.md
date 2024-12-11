# PartyApp

This is a simple guide to set up and run the PartyApp project. Follow the steps below to get started.

## Setup Instructions

### 1. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 2. Configure Local Environment

1. Find your local IP address by running the following command:

   ```bash
   ipconfig
   ```

   - Look for the IPv4 address under your active network connection (e.g., `192.168.x.x`).

2. Create a `.env.local` file in the project root directory with the following content:
   ```env
   IP_ADDRESS=<your-ip-address>
   EXPO_PUBLIC_API_URL=http://${IP_ADDRESS}:3001
   ```
   Replace `<your-ip-address>` with the IPv4 address you found in the previous step.

### 3. Start the Server

Run the server with the following command:

```bash
npm run start-server
```

### 4. Start the Expo Development Server

Run the following command to start the Expo development server:

```bash
npx expo start
```

Follow the instructions expo is giving you, where you can preview the app on emulator, or physical device.

## Additional Notes

- Ensure the server is running before launching the app in Expo.
- Use the same network for both your development machine and the device running the Expo app.

## Troubleshooting

- **Expo App Not Connecting:** Ensure the `EXPO_PUBLIC_API_URL` is correctly set with your local IP address and the port matches the server's port (`3001`).
- **Server Errors:** Check the terminal logs for errors when running `npm run start-server` and ensure no other process is using port `3001`.
