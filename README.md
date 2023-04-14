<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/LeandervanAarde/FinFinder)
![GitHub watchers](https://img.shields.io/github/watchers/LeandervanAarde/FinFinder)
![GitHub language count](https://img.shields.io/github/languages/count/LeandervanAarde/FinFinder)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/LeandervanAarde/FinFinder)


<!-- LeandervanAarde/FikaClothing -->

<!-- HEADER SECTION -->
<h3 align="center" style="padding:0;margin:0;">Leander van Aarde</h3>
<h5 align="center" style="padding:0;margin:0;">200211</h5>
<h6 align="center">FinFinder | 2023</h6>
<h6 align="center"><a href="https://fin-finder-n1mzgwlgh-leandervanaarde.vercel.app/">FinFinder website</a> </h6>
</br>
<p align="center">

  <a href="https://github.com/LeandervanAarde/FinFinder">
    <img src="https://drive.google.com/uc?export=view&id=1QKoFlOOrMXCMDR3Mb9-ysmpokt7q64Tq" alt="Logo" width="140">
  </a>
<!-- https://drive.google.com/file/d/19JkfDgvGLzHQ1AVMvgv9rLTFR0HzJBVq/view?usp=sharing -->
  
  <h3 align="center">Fin Finder | Fish inventory management</h3>

  <p align="center">
Fin Finder is a website where users can manage their own inventory of fish and fish related items. Here you can view and edit your own fish, and if you have enough inventory,  build and craft one of the prebuilt tanks!
    <br />
   <br />
   <br />
<h6 align="center"><a href="https://drive.google.com/uc?export=view&id=14hkEiHzcPIWxUBJUMf3PfueCY7b6r7cy">FinFinder walkthroug</a> </h6>
   <!-- INSERT UP UP -->
    ·
    <a href="https://github.com/LeandervanAarde/FinFinder/issues">Report Bug</a>
    ·
    <a href="https://github.com/LeandervanAarde/FinFinder/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* :tropical_fish: [About the Project](#about-the-project)
* :tropical_fish: [Project Description](#project-description)
* :tropical_fish: [Built With](#built-with)
*:tropical_fish: [Getting Started](#getting-started)
* :tropical_fish: [Prerequisites](#prerequisites)
* :tropical_fish: [How to install](#how-to-install)
* :tropical_fish: [Features and Functionality](#features-and-functionality)
* :tropical_fish: [Concept Process](#concept-process)
* :tropical_fish: [Ideation](#ideation)
* :tropical_fish: [Wireframes](#wireframes)
* :tropical_fish: [Development Process](#development-process)
* :tropical_fish: [Implementation Process](#implementation-process)
* :tropical_fish: [Highlights](#highlights)
* :tropical_fish: [Challenges](#challenges)
* :tropical_fish: [Future Implementation](#peer-reviews)
* :tropical_fish: [Final Outcome](#final-outcome)
* :tropical_fish: [Mockups](#mockups)
* :tropical_fish: [Video Demonstration](#video-demonstration)
* :tropical_fish: [Conclusion](#conclusion)
* :tropical_fish: [License](#license)
* :tropical_fish: [Contact](#contact)
* :tropical_fish: [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->

![image1](https://drive.google.com/uc?export=view&id=1MVesVdeQRPSL1pJgqw5yAf9LK7Lv9gcM)


### Project Description

FinFinder is a full stack MEAN stack project implemented Angular 6, Typegoose, MongoDB Atlas and NodeJS. The aim of the project is to allow users to manage their own inventory of fish and fish related itemsm ultimately giving them the ability to track and keep inventory up to date.

### Built With
* [SASS](https://sass-lang.com/)
* [Angular](https://angular.io/)
* [MongoDb Atlas](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [Typegoose](https://typegoose.github.io/typegoose/)

## Getting Started

To get a copied file of this repository, follow the steps below to get it installed on your local machine. 

### Prerequisites

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

## Getting Started

To get a copied file of this repository, follow the steps below to get it installed on your local machine. 

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.
Ensure that you have the Angular CLI installed on your local machine, you an install it by running the command  `npm install -g @angular/cli`

### How to install

### Installation
Here are a couple of ways to clone this repo:

Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/LeandervanAarde/FindFinder.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/LeandervanAarde/FinFinder.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install / npm i
   ```

4. To get access to the database, go to ```https://github.com/LeandervanAarde/FinFinderServer ```
5. Once in the App, run  ```ng serve --open``` to compile in the browser.

6. Go Clone the FinFinder server on my  <a href="https://github.com/LeandervanAarde/FinFinderServer">Github</a> and run 
    ```npm i ``` to install all the dependancies. Access to the Mongo is restricted and will only be given access to upon request.
</br>
 </br>

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->

![image2](https://drive.google.com/uc?export=view&id=1eHEyg7EDosaCBDD3KXpFT8KljRSXceLk)


### Personalised Inventory
Fin Finder creates an empty ivnentory for each user to manage, this means that every user gets access to all the inventory that FinFinder has in its database, however, each users quantity of inventory will be 0 by default and it is up to the user to update the inventory appropriately. This flexibility allows for a more personalised experience for each user.

### Update and view
Users can update inventory based on their inventory that they have and can view individual information about their inventory
*   Fish
    *   View fish compatibility, diet requirements as well as optimal temprature. 
    * View in which of <b>your</b> tanks the fish can be found
*   Decorations, Utilities and Tanks
    * View in which of the prebuilts this item can be used.

### Search Products
Looking for a specific product? Fika has a searchbar that allows users to search for any available product that Fika has on the website. 

### Filter and search
Seeing as the inventory is quite large, users hold the ability to filter their inventory based on the category (fish, decorations, utilities). They can also search their tanks in the My tanks section. 

![image3](https://drive.google.com/uc?export=view&id=13fqsiSfRAUu6tCl278f3IpNFPU5YXa2a )

### Like what you see? view it and review it on the individual product page
Fika has an individual product page that holds 4 images of each product so that users can view it from every angle, colours are also visually showcased along with the sizes, discount and it will show if the shoe is in stock or not. If you are not sure about the shoe, take a look at the reviews and decide for yourself :D. Users also have the opportunity to leave a review and view other shoes on the site

### Dont have an account? Sign up!
Fika has an account system that will allow users to login/out of their accounts or sign up if they don't have an account. Viewers will only be able to add to their cart once they are logged in. 

### All managed, in one place
Admin page has been provided so that admins can edit/view update and delete stock. Admins can also dispatch any orders that have been placed. 

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project. <br>
For this application, I wanted to create something as close to a real ecommerce website as I possibly could while considering the time constraint that was set in place, I wanted to create something that would be attractive to the "users". Fika clothing was approached in more of a website, taking inspiration from websites such as the official VANS website and Takealot.  
<br> 
Throughout the conceptual process of this application , I had started taking more consideration of components and how the application should be structured, this would make it easier for myself to create reusable component and for future developers to uderstand how the project is structured. This would make the entire process smoother, I had also learned about MONGODB Atlas, a NoSQL database that would be used alongside NODE and Express. 


### Ideation

![image7](https://drive.google.com/uc?export=view&id=1DyQ1Odspv3moaKG0TD8eC-hrzH0jjZea)
### Wireframes
Wireframing was one of the most important aspects of this project, I wanted to create an application that was pleasing to the viewer and that functioned well. Wireframing was the most time consuming aspect of this project considering that I had also created designs for this project beforehand. 
![image6](https://drive.google.com/uc?export=view&id=1eVpD0UuiBSgq_hDE1oaZLEW4iznOIikz)
![image8](https://drive.google.com/uc?export=view&id=1vKAs1lwSBQbaV_Wxx5T8lO3aFgWFiU4G)
![image9](https://drive.google.com/uc?export=view&id=1FtlZz4_vqHLaMjifonwUaHfShA7czli8)
![image10](https://drive.google.com/uc?export=view&id=1JyB1IyiGPcYHZyXKnvhh-WZuyorNXCh_)




<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Better management of components, giving each component a folder that will hold the stylesheet along with the component. 
* Working with useContext in order to improve state management throughout the entire project, making less code do more. 
* Working searchbar in the project that will return the correct data
* SASS was implemented in order to make styling more efficient and easier to understand, this could also assist with consistency of colours throughout the project.
* AWS buckets implemented for images, thus making the program run faster due to less memory taken up in the actual project. 
* Filters and sorting implemented to aid users in the search for shoes. 
* Colours loaded dynamically through the database along with the sizes 
* Reviews section where users can leave a review and view all the other reviews 
* Going back a page implemented through useNavigate(-1)
* orders are tracked and dates are dynamically populated for dispatch 

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* Over the course of this project, one of the main highlights was the use of REACT, I have learned a lot about React recently and this was a way of testing it and really starting to make React work, this has been an exciting project in that regard and I will continue to learn more about REact so that I am able to use the full power of it. 
* Using NodeJS and Express has been extremly exciting, Mongo has also been a highlight and a better experience than an SQL database. The use of Javascript as a backend language has been fantastic. 
* I really enjoyed the complexity of this project, although I feel the project can be pushed further, I have done a lot and I am proud of the project as a whole. This project has definetly been my favorite project that I've done and I hope to improve it. 

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* One of my largest challenges in this project was considering how all the required fields were going to be laid out, this was more of a front end issue and I do thinnk I can improve on this aspect.  
* The creation of my database has been a major struggle, I think I tried to make it more complex, but it has been a good struggle and I have definetly learned a lot about how to better structure things in the future 
* One of my BIGGEST issues in this project lays within my cart, unfortunately the way I have set it up, it can only handle one variation at a time, this is a problem that I am actively investigating and will fix. 

#### Above And Beyond

What aspects of this final build contribute to the `Above And Beyond` Component of your brief?
<!-- what did you learn outside of the classroom and implement into your project-->
* Implementation of reviews, this was fairly ease considering my DB structure, but it worked out for the best. 
* AWS buckets
* AWS buckets, this was used for image storage as opposed to using multer and the local machine. This was exciting because I dont think other students were able to achieve this.

* Context state management
* Context state management was implemented into the project in order to make code easier to read and make data easier to update, this was quite challenging and I dont fully understand Context as of yet, but I do have a good grasp on it and Im looking forward to learning more about it so that I can use something like REDUX or GraphQL 
* SASS
* Sass was used as a means to make Css more readable due to its structure. SCSS allows for external files to be linked. This was used to create more consistency in the front end of the application with the use of variables. The variables would allow me to predefine aspects such as fonts and colours to be re-used. Variables would also avoid aspects of too much repetition and making the code look un neat. 

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->
* IN future I would like to do more server side rendering and focus on the backend.
 
* A fututre implementation is making the project a more accurate ecommerce website, this would make it more appealing.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image10](https://drive.google.com/uc?export=view&id=1D2ma2-aVcSnSGjWGr7jR-s6f7K2yYVIG)


![image11](https://drive.google.com/uc?export=view&id=1MgG8gj8d_mE2aF25ZkXNcijICEb0zWNM)

![image12](https://drive.google.com/uc?export=view&id=1DyQ1Odspv3moaKG0TD8eC-hrzH0jjZea)

![image13](https://drive.google.com/uc?export=view&id=1Y0L1dj2CV-1NOcrBL5Z2-uU_7vW-SSoG)

![image14](https://drive.google.com/uc?export=view&id=1oXXHJ75UTolK1Fx_yzHC1fjD-p1j339l)


1AZRxRysJt9lKHe_fatdQWGNezd3PFrUv
<!-- VIDEO DEMONSTRATION -->
### Video Demonstration
To see a run through of the application, click below:
[View Demonstration](https://drive.google.com/uc?export=view&id=1cNGq8l3L4jkYujGfNEWfyXQMHyyK0_H3)

See the [open issues](https://github.com/LeandervanAarde/cde-booking/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* [Leander van Aarde](https://github.com/LeandervanAarde/fikaclothing)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **leander van Aarde** -(mailto: Leander.vaonline@gmail.com) - [@instagram_handle](https://www.instagram.com/_.leander_e/) 
* **Project Link** - https://github.com/LeandervanAarde/fikaclothing

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Stack overflow](https://stackoverflow.com/)
* [Images](https://www.nike.com/za/)
* [Images](https://www.adidas.co.za/outlet?cm_mmc=AdieSEM_Google_Search-_-adidas_Brand_GSN_Exact_AWO-_-Brand-_-adidas_brand-_-dv:eCom-_-cn:adidas_Brand_GSN_Exact_AWO-_-pc:Google_Search&cm_mmc1=ZA&cm_mmc2=PPC-Multiple-brand-Multiple-BM-ZA-EMEA-eCom-Paid_Search&gclid=Cj0KCQjw08aYBhDlARIsAA_gb0fw39zkUktuakE1CdeBlNpQDyePBn8pLW94A1wBcFBMpJRJ9OzMshgaAuKuEALw_wcB&gclsrc=aw.ds)
* [AWS](https://aws.amazon.com/free/?trk=73c6744c-29f5-4966-bdc7-8599174c182d&sc_channel=ps&s_kwcid=AL!4422!3!444219541634!e!!g!!aws&ef_id=Cj0KCQjw08aYBhDlARIsAA_gb0dnWqHWmnxuX0ZVFEOC_r6m2A0mZyKIQs8dfv0rhrp3zZW2lVW1QPUaAkS7EALw_wcB:G:s&s_kwcid=AL!4422!3!444219541634!e!!g!!aws)

