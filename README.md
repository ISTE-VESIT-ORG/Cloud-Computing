# Day 2
Deploying our website using [Apache server](https://httpd.apache.org/) on a Virtual machine created using [Microsoft Azure](https://portal.azure.com/#home)

## Final result ✨
<img src="./static-website/public/demo.gif" width="100%" />

<hr>

## Steps to deploy

- Creating of Virtual Machine
  - This is the home screen for Microsoft Azure account.
  <img width="1440" alt="Screenshot 2022-03-08 at 9 33 43 PM" src="https://user-images.githubusercontent.com/92196450/224660843-8c212944-2ac2-465d-847b-e4cccd880d2a.png">

  - Here, we create a Virtual Machine
  <img width="599" alt="Screenshot 2022-03-08 at 9 33 51 PM" src="https://user-images.githubusercontent.com/92196450/224660901-60fe5c42-24e8-420f-8e69-9644ec72c0da.png">

  - Click on Virtual Machine 

<img width="821" alt="Screenshot 2022-03-08 at 9 34 00 PM" src="https://user-images.githubusercontent.com/92196450/224661182-d39ad7a8-9b16-410e-b529-65630707bab8.png">


  - Enter details as instructed
<img width="1440" alt="Screenshot 2022-03-08 at 9 35 42 PM" src="https://user-images.githubusercontent.com/92196450/224661248-31129dad-8efe-4a3e-96f9-ce578c07f144.png">



  - Make sure to select HTTP, HTTPS and SSH in the dropdown menu
<img width="1440" alt="Screenshot 2022-03-08 at 9 36 30 PM" src="https://user-images.githubusercontent.com/92196450/224661328-45f9f414-d700-4743-9023-6bee4f5fb2b1.png">



  - Click  on  Next by keeping the default settings as it is.

<img width="1440" alt="Screenshot 2022-03-08 at 9 37 32 PM" src="https://user-images.githubusercontent.com/92196450/224661420-ba1cc7f0-676f-4d75-bd5e-9e079d6111a7.png">


  - Keep the default settings in this section and proceed

<img width="1440" alt="Screenshot 2022-03-08 at 9 37 50 PM" src="https://user-images.githubusercontent.com/92196450/224661479-b8972e4a-d2ce-49c0-b53a-f6474107849b.png">


  - Keep the default settings in this section and proceed

<img width="1440" alt="Screenshot 2022-03-08 at 9 38 01 PM" src="https://user-images.githubusercontent.com/92196450/224661557-92bcfb42-e80e-4641-b76e-1945951a5c9e.png">


  - Click  on  Next by keeping the default settings as it is.

<img width="1440" alt="Screenshot 2022-03-08 at 9 38 14 PM" src="https://user-images.githubusercontent.com/92196450/224661657-73d2d231-9ee8-4ea2-b792-97364353dd4b.png">


  - Click  on  Next by keeping the default settings as it is.

<img width="1440" alt="Screenshot 2022-03-08 at 9 46 58 PM" src="https://user-images.githubusercontent.com/92196450/224661720-60d5b058-d40b-4a2d-bb4a-8509e28e5218.png">


  - Important Step: Select “Download private key and create resource” option only otherwise you will have to create the Virtual Machine again. 

<img width="1440" alt="Screenshot 2022-03-08 at 10 04 34 PM" src="https://user-images.githubusercontent.com/92196450/224661836-099afc97-b0cd-49b2-935f-54cd1f7654d0.png">


  - Your Virtual Machine is created and ready to use.

<img width="1440" alt="Screenshot 2022-03-08 at 9 49 38 PM" src="https://user-images.githubusercontent.com/92196450/224661895-63a5f432-a9d1-4583-bc53-3268f01149b5.png">




- Accessing the virtual machine
  - Sshwifty  is a website through which we can access our virtual machines.

<img width="1440" alt="Screenshot 2022-03-08 at 9 53 19 PM" src="https://user-images.githubusercontent.com/92196450/224661933-55c3df54-191b-4c3d-9220-8e6f496ddbdd.png">


  - Select “SSH”

<img width="1029" alt="Screenshot 2022-03-08 at 9 53 31 PM" src="https://user-images.githubusercontent.com/92196450/224662027-4376122c-cc33-42f4-9b11-f99c08a02d41.png">


  - Enter the username of your Virtual Machine, copy its IP address, paste it and proceed.

<img width="1440" alt="Screenshot 2022-03-08 at 9 54 00 PM" src="https://user-images.githubusercontent.com/92196450/224662081-99cc69c9-7295-4ba3-b600-cb10b03dda2e.png">


  - Click on “Yes I do” and proceed.

<img width="1440" alt="Screenshot 2022-03-08 at 9 54 08 PM" src="https://user-images.githubusercontent.com/92196450/224662146-084d719b-a0d7-440f-84c4-a1fbbaa31ffc.png">




-  Installing requirements
  - After successfully logging in the virtual machine you will be able to see the following

<img width="1440" alt="Screenshot 2022-03-08 at 9 54 41 PM" src="https://user-images.githubusercontent.com/92196450/224662215-466b3949-033e-400d-9d23-9e4495cb1fc0.png">


  - Run following commands:
      - sudo apt-get update
      - sudo apt-get install apache2
      - service apache2 status (to check the status of apache server)
  - Follow the following commands step by step

<img width="1365" alt="Screenshot 2022-03-08 at 10 25 43 PM" src="https://user-images.githubusercontent.com/92196450/224662328-8aaf6c36-ce2a-47fe-aa60-5fc038466aa8.png">
<img width="698" alt="Screenshot 2022-03-08 at 10 25 43 PM copy" src="https://user-images.githubusercontent.com/92196450/224662355-dfa7bceb-4888-4bff-abf2-a7d170342678.png">


  - Change the myName variable to your name and then use Ctrl+S to save the file and then Ctrl+X to exit from this

<img width="679" alt="Screenshot 2022-03-08 at 10 25 34 PM" src="https://user-images.githubusercontent.com/92196450/224662445-ac09f8c4-7d82-4146-bc30-62aa00e7151f.png">


  - Copy the IP address from below page and then paste in the browser

<img width="1440" alt="Screenshot 2022-03-09 at 9 14 36 PM" src="https://user-images.githubusercontent.com/92196450/224662543-0e01e63b-e3c0-42d8-b18d-8eecdccb4cab.png">


  - Thus our website has been successfully hosted on Microsoft Azure

<img width="1440" alt="Screenshot 2022-03-08 at 10 27 05 PM" src="https://user-images.githubusercontent.com/92196450/224662588-a2b1e889-8d56-4200-9ba9-703617012c65.png">
