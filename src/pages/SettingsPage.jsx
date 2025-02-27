import { useThemeStore } from "../store/useThemeStore";
import { THEMES } from "../constants";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hello, how are you doing?", isSent: false },
  { id: 2, content: "I'm doing well, thank you!", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <div className="text-lg font-semibold">Theme</div>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((themed) => (
            <button
              key={themed}
              onClick={() => setTheme(themed)}
              className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
                themed === theme ? "bg-base-200" : "hover:bg-base-200/50"
              }`}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={themed}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text font-medium truncate w-full text-center">
                {themed.charAt(0).toUpperCase() + themed.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
