# Day 2
Deploying our website using [Apache server](https://httpd.apache.org/) on a Virtual machine created using [Microsoft Azure](https://portal.azure.com/#home)

## Final result ✨
<img src="./static-website/public/demo.gif" width="100%" />

<hr>

## Steps to deploy

- Creating of Virtual Machine
  - This is the home screen for Microsoft Azure account.
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.33.43%20PM.png)
  - Here, we create a Virtual Machine
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.33.51%20PM.png)
  - Click on Virtual Machine 
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.34.00%20PM.png)
  - Enter details as instructed
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.35.42%20PM.png)
  - Make sure to select HTTP, HTTPS and SSH in the dropdown menu
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.36.30%20PM.png)
  - Click  on  Next by keeping the default settings as it is.
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.37.32%20PM.png)
  - Keep the default settings in this section and proceed
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.37.50%20PM.png)
  - Keep the default settings in this section and proceed
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.38.01%20PM.png)
  - Click  on  Next by keeping the default settings as it is.
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.38.14%20PM.png)
  - Click  on  Next by keeping the default settings as it is.
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.46.58%20PM.png)
  - Important Step: Select “Download private key and create resource” option only otherwise you will have to create the Virtual Machine again. 
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%2010.04.34%20PM.png)
  - Your Virtual Machine is created and ready to use.
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.49.38%20PM.png)


- Accessing the virtual machine
  - Sshwifty  is a website through which we can access our virtual machines.
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.53.19%20PM.png)
  - Select “SSH”
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.53.31%20PM.png)
  - Enter the username of your Virtual Machine, copy its IP address, paste it and proceed.
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.54.00%20PM.png)
  - Click on “Yes I do” and proceed.
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.54.08%20PM.png)


-  Installing requirements
  - After successfully logging in the virtual machine you will be able to see the following
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%209.54.41%20PM.png)
  - Run following commands:
      - sudo apt-get update
      - sudo apt-get install apache2
      - service apache2 status (to check the status of apache server)
  - Follow the following commands step by step
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%2010.25.43%20PM.png)
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%2010.25.43%20PM%20copy.png)
  - Change the myName variable to your name and then use Ctrl+S to save the file and then Ctrl+X to exit from this
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%2010.25.34%20PM.png)
  - Copy the IP address from below page and then paste in the browser
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-09%20at%209.14.36%20PM.png)
  - Thus our website has been successfully hosted on Microsoft Azure
  ![alt text](https://github.com/SarveshPatil46/Cloud-Computing-Readme/blob/main/Screenshot%202022-03-08%20at%2010.27.05%20PM.png)
