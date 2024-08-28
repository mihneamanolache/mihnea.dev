import { useState, useEffect } from 'react';

const oneTimeNotifications: Array<JSX.Element> = [
    (<p key={2}>This site uses <span className="text-tokyo-blue font-bold">cookies</span> to improve your experience. By using this site you agree to the use of cookies.</p>),
    (<p key={1}><span className="bg-tokyo-yellow text-tokyo-background-night px-1 font-bold">PRO TIP:</span> Use the <code className="text-tokyo-purple">:help</code> command and navigate this site using keybindings.</p>),
    (<p key={2}>I recommend using a <span className="text-tokyo-blue font-bold">desktop</span> for the best experience.</p>),
];

const Notifications = ({ tnc }: { tnc: boolean }) => {
    const [visibleNotifications, setVisibleNotifications] = useState<Array<JSX.Element>>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const n = tnc ? [] : [...oneTimeNotifications];
        if (currentIndex < n.length) {
            const timeoutId = setTimeout(() => {
                setVisibleNotifications((prev) => [
                    ...prev,
                    n[currentIndex],
                ]);
                setCurrentIndex((prevIndex) => prevIndex + 1);

                // Remove notification after 5 seconds
                setTimeout(() => {
                    setVisibleNotifications((prev) =>
                        prev.filter((_, index) => index !== 0)
                    );
                }, 7500);
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [currentIndex]);

    return (
        <div id="notifications" className="fixed md:opacity-70 right-0 bottom-[2vh] md:bottom-[3vh] w-full bg-tokyo-background-dark mt-4 space-y-2 md:text-right">
            {visibleNotifications.map((notification, index) => (
                <div key={index} className="notification">
                    {notification}
                </div>
            ))}
        </div>
    );
};

export default Notifications;
