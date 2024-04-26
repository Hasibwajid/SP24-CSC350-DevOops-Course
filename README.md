#DevOops-Course


COMSATS UNIVERSITY ISLAMABAD, ATTOCK CAMPUS
LAB MID
 
(TASK- 17)
NAME	MUHAMMAD HASEEB
REG NO	SP21-BCS-020
SUBJECT	ToCS
SUBMITTED TO	DR FARHAN AADIL
DATE	26-04-2024














Step-by-Step Guide: Deploying a Jamstack (Gatsby) Serverless Site with Vercel

Introduction
In this guide, you will learn how to deploy a Gatsby site using Vercel. This process involves setting up a Gatsby project, customizing it according to your needs, containerizing it with Vercel, and deploying it to make it accessible to all users.
Prerequisites
Before you begin, make sure you have the following preSsrequisites:
•	Node.js installed on your machine
•	A Vercel account (you can sign up at https://vercel.com)
Step 1: Install Gatsby
1.	Open your terminal.
2.	Run the following command to install Gatsby globally:
npm install -g gatsby-cli 
 
Step 2: Create a New Gatsby Project
1.	Navigate to the directory where you want to create your Gatsby project.
2.	Run the following command to create a new Gatsby project:
gatsby new my-gatsby-site 
 


3.	Navigate into the newly created directory:
cd my-gatsby-site 
 
4.	Access site on web
 
	 


Step 3: Customize Your Gatsby Site
1.	Open the project directory in your code editor.
2.	Customize the site according to your needs by modifying the pages, components, and styles.
3.	
Step 4: Containerize with Vercel
1.	Install the Vercel CLI globally by running the following command:
npm install -g vercel 
 
2.	Log in to your Vercel account using the CLI:
vercel login 
(You can Login via github)
3.	Once logged in, navigate to your Gatsby project directory in the terminal.
4.	Run the following command to deploy your project with Vercel:
vercel 
 






5.	Follow the prompts to select your scope, project name, and directory.
 
Step 5: Deploy Your Gatsby Site
1.	After the deployment process is complete, Vercel will provide you with a URL for your deployed site.
 
2.	Share this URL with others to make your Gatsby site accessible to all users.
Will be accessible like this, but might looks not similar to this as this was customized a bit.
 

Conclusion
Congratulations! You have successfully deployed your Gatsby site using Vercel. You can now share your site with others and start reaching a wider audience.
