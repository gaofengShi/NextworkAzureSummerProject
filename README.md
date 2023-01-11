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
   <img src="pictures/web01display.png" width="400">  
   <img src="pictures/web02display.png" width="400"> 
### Load Balance and Auto scaling
The virtual machine is set for a web server in this project. We set and test the load balance based on two VMs and a virtual network. Here we need to follow three steps to create a public load balancer:
   - Create the virtual network: _sumpro-costiss-vn_, subnet, and Azure Basion host. The virtual network and subnet contains the load balancer and virtual machines. The Bastion host is used to securely manage the virtual machines and install IIS to test the load balancer.
   - Create load balancer: it is a zone redundant load balancer can balances VMs with zone-redundancy or data path survives and region remains healthy.
   - NAT gateway: for outbound internet access for VMs. So we can test the load balance when we stop one of VMs.
   - Install IIS: set the IIS (internet information services) in the two VMs Basion connect. 

After all the setup, we test the web display form the two VMs:\
   <img src="pictures/2browersDifferentVM.png" width="400">\
   As we can see the same IP displayed different contents.
   
If we showdown VM1, the two webs will display only from VM02:\
   <img src="pictures/stopVM01.png" width="400">\
   
If we showdown VM2, the two webs will display only from VM01:\
   <img src="pictures/stopVM02.png" width="400">\
   
 
The version 2 website is deplyed on PaaS stracture Azure web Service. It is easily to scale up by change the App Service plan. The App Service plan is **Free F1** for the _Feedback_ simple website at moment. If the requirments grow up, it can be changed by increase the CPU, Memory, and Auto Scale from Hardware and  Feature views. 
### Azure Cosmos DB for data

### The final website deploy
 

