import { THEME_MAP, LOCALSTORAGE_THEME } from "@/utils";
import { Close } from "@/components";

type Props = {
    isOpen: boolean
    handleClose: () => void
}

const Settings = ({ isOpen, handleClose }: Props) => {

    const handleThemeSelect = (theme: keyof typeof THEME_MAP) => {
        const { primary, secondary } = THEME_MAP[theme];
        document.documentElement.style.setProperty('--color-primary', primary);
        document.documentElement.style.setProperty('--color-secondary', secondary);
        localStorage.setItem(LOCALSTORAGE_THEME, theme);
        handleClose();
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                } bg-black/20`}
        >
            <div className="bg-mint-white p-6 rounded shadow-lg w-full max-w-md mx-2">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold mb-4">Select Theme</h2>
                    <div onClick={() => handleClose()}>
                        <Close />
                    </div>
                </div>
                <div className="mb-4 flex-wrap space-x-1">
                    {Object.keys(THEME_MAP).map((themeName) => (
                        <button
                            key={themeName}
                            onClick={() => handleThemeSelect(themeName as keyof typeof THEME_MAP)}
                            className="px-4 py-2 rounded font-medium text-white"
                            style={{ backgroundColor: THEME_MAP[themeName as keyof typeof THEME_MAP].primary }}
                        >
                            {themeName}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Settings;