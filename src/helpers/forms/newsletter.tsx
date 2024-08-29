export const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement;
    /* TODO: Add handler */
    console.log(email.value);
    const location = window.location.href;
    window.location.href = location;
};
