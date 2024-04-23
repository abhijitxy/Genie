# About Project

Welcome to Genie, your one-stop solution for revolutionizing customer support on your website! In less than four minutes, you can automate your customer service with a bespoke ChatGPT-like bot, providing a seamless and efficient experience for your users.

## Tech Stack

- **[Typescript](https://www.typescriptlang.org/)** - Language
- **[Next.js](https://nextjs.org/)** - framework 
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS
- **[Clerk](https://clerk.com/)** - authentication 
- **[Vercel](https://vercel.com/)** - hosting
- **[OpenAI](https://openai.com/)** - AI
- **[Prisma](https://www.prisma.io/)** - ORM


## Local Development

### Requirements

To run Genie locally, you will need:

- **Node.js**: Ensure that Node.js is installed on your machine.

### Setup Instructions

1. **Fork this repository to your GitHub account.**
2. **Clone the repository to your local device:**

    ```bash
    git clone https://github.com/<your-username>/Genie
    ```

3. **Install dependencies in the root directory:**

    ```bash
    npm install
    ```

4. **Create your `.env` file from the `.env.example`. You can use:**

    ```bash
    cp .env.example .env
    ```

   Replace the placeholder values with your specific configurations.

5. **Set the following environment variables in the `.env` file:**
6. 
    - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
    - `CLERK_SECRET_KEY`
    - `OPENAI_API_KEY`
    - `DATABASE_URL`

7. **Run the development server:**

    ```bash
    npm run dev
    ```

8. **Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.**

 Your feedback and contributions are always welcome. Happy coding! 
 Follow us on [Twitter](https://twitter.com/Abhijitroy_dev) for updates. :)
