const form = document.getElementById('myForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = {
    name,
    email,
    message,
  };

  try {
    const response = await fetch('https:
      method: '//api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer YOUR_SENDGRID_API_KEY',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: 'mthombenidanieljunior@gmail.com',
              },
            ],
          },
        ],
        from: {
          email: 'your_email@example.com',
        },
        subject: 'New message from website',
        content: [
          {
            type: 'text/plain',
            value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          },
        ],
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully!');
    } else {
      console.error('Error sending email:', response.status);
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

)
;