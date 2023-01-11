# Nextwork Azure Summer Project
## The Honest Feedback project. 
This project is an Azure study project for Cotiss company organised by NextWork summer of Azure 2022. The project required a couple of steps to build a simple website on Azure cloud. 
The website called The Honest-Feedback is to collect feedback from the employees. \
There are four basic goals:
1. Account goal:
   - IAM for the project.
   - MFA for the project. 
   - Billing alerts of this project.
2. Web Hosting: 
   - Deploy a VM host simple static "Honest-Feedback Coming Soon" web page. 
   - Apply snapshot of VM to deploy a new VM. 
3. Auto Scaling:
   - Set an Azure Load Balancer for the VMs with two availability Zone. 
4. External Data:
   - use Azure Cosmos DB table to loading and retrieveing data on the website.<br/>

Finaly, we built two verstion website for [_The Honest Feedback_](https://github.com/gaofengShi/NextworkAzureSummerProject/tree/main/feedback):
   - Node.js web with NoSQL Azure Cosmos DB deployed on Linux virtual machine. 
   - Node.js web with NoSQL Azure Cosmos DB deployed on Azure App Service. 
   
   
### The Azure project Account setting
The Azure account setting for this project is based on a free trial.  We need to consider the cost so often. 
The account subscription access control  setting in Azure Active Directory.\
There are three Groups:
   - Developer: the administrator with contrivuter role and the developer. 
   - Tester: the project tester. 
   - Guest: the guester of the project.     
      <img src="pictures/typesofGroups.png" width="750">

There are four users:
   - Gaofeng Shi: the owner of the account. 
   - Cotissadmi: is the website developer and administrator with a contributor role in the _Developer_ group.
   - Cotissterster: is the website tester in the _Tester_ group.
   - Instructor: assigned to Nextwork Amber as a guest role with full access to the project in the _guest_ group. 
      <img src="pictures/uesrs.png" width="600">

MFA setting in Default Directory there are two types: __Security__ and __Microsoft 365__. \
This setting let the user passwordless login. If the user has the Microsoft 365 account, you can built-in with Azure account together. For example, The owner login the account with Microsoft 365 account. \
For the user who doesn't have the Microsoft 365 account. You should use the Multi-factor authentication with Microsoft Authenticator APP in your device. For instance, the Cotissadmi login the account with Microsoft Authenticator. So when you login it will show on your computer let you approve from your phone.  
 <img src="pictures/cotiss adim login.png" width="250">  <img src="pictures/MFAapp.PNG" width="150">.
 
The budget control and billing alerts of this project assume the cost is $20.00 monthly. The 
Alert conditions setting that actual cost is 80% and forecasted cost is 95%. 

The picture below show the buget setting:\
   <img src="pictures/Bugetsetting.png" width="600">\
When the alert is triggered it will send an email to the owner. 

You also can use the cost analysis function in the subscription to analysis you spent and reduce it in future. 
The picure below is the screenshot of the project cost analysis:\
   <img src="pictures/cost analysis.png" width="500">
### The VM deploy and backup
The Virtual machine for host the webside properties:
   - VM Name: **cotissweb01** with Linux _Ubuntu20.04_ system
   - Size: Standard B1s (1 vcpu, 1 GiB memory) (eligible free for one year).  
   - OS disk: Resize to 64 Gib(P6) Free account eligible. Premium SSD (locally-redundant storage)
   - Public IP address is dynimic setting as it's free. We try setting on standard static when deploy load balance and scaling. 
   - DNS name: _sumprovm.australiaeast.cloudapp.azure.com_.  
   - Networking: need _Add inbound port rule_ for **Port** 3000 as we deploy _Node.js express_ web application. 
 
 After we deployed the web application into VM, we can backup the VM with snapshot and create a VM2 from the snapshot easily.\
 The below screenshots are the website display form VM2 and VM1. (for the cost reason we deleted the disk of snapshot after demostration). \
   <img src="pictures/web01display.png" width="400">  <img src="pictures/web02display.png" width="400"> .

### Load Balance and Auto scaling

### Azure Cosmos DB for data

### The final website deploy
 

