const puppeteer = require('puppeteer')

(async () => {
    // Launch a new browser instance
    const browser = await puppeteer.launch({
        headless: false, // Set to true to run in headless mode (without UI)
        args: ['--start-maximized'] // Open browser maximized
    });

    // Open a new page
    const page = await browser.newPage();

    // Define your cookies
    const cookies = {
        name: 'sessionid',
        value: '67774850802:FqXwjQZybvoufr:27:AYcuAgDi0nwBc0t6pMlfzKTYdEki8G0GykOxT3Uh7L4', // Replace 'your-session-id' with your actual session ID value
        domain: '.instagram.com', // Domain for which the cookie is valid
        path: '/',
        secure: true, // Set to true if the site uses HTTPS
        httpOnly: true // Set to true if the cookie is HttpOnly
    }

    // Set cookies for the page

    // Navigate to Instagram
    await page.goto('https://www.instagram.com/');
    await page.setCookie(cookies);
    await page.reload();

    // Take a screenshot of the profile page
    // await page.screenshot({ path: 'profile.png' });
    await page.waitForTimeout(30000); // Adjust the timeout as needed

    // Close the browser
    await browser.close();
})()