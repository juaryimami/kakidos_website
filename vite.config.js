import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd(), "");
    return {
        define: {
            "process.env": env,
        },
        plugins: [react()],
    };
});
