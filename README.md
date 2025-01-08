iam creating simple blog app
#Topic
1) how to install the node js and setup
2) scripts disable solving
3) how to create a react js project
4) how to install packages or libraries and unistall packages and libraries using npm install and npm uninstall
5) how to run the project using npm start
7) how to link styles to jsx files by importing css file
8) how to print html on website 
9) how to print the component jsx by importing in another one file
11) how to create a multiple componenst that jsx files and how to print in app.jsx files by importing that anme and before importing we need to export the file by using export default filname or function name

---------------------------------------------------------------------------------------

//to upload new project to github
//visit to github.com and create a new repository
//after visite to project folder in local system and right click and click show more option and click git bash here option

//to configure github and git bash after installing first time
 => git config --global user.name "your guthub Username" => enter
 => git config --global user.email "your guthub userEmail" => enter

 //to check which username and which email is linked to gitbash
 => git config --global user.name => enter - it will shows your username
 => git config --global user.email => enter -  it will shows your email

--------------------------------------------------------------------------


//check is that project folder is opened or not in git bash terminal if it is
//inisialize the git in our project folder
    => git init

//we need to add all files to git to upload to github to add all files
   => git add .

//we need to confirm that is commit all added files
  => git commit -m "any message inside the string "

//we need to link first time our local porject folder and created github repositoray to link go to ur repo and copy url of ur repositary
  => git remote add origin your_repositary_link.git

//after all these we need to push or upload to github repo
  => git push -u origin master
--visit to github and refresh the page it will be appears
------------------------------------------------------------------------


  //to update anything after you changed in your local system  we need to update on github also

  1) visit to your folder from where your are uploaded the project
  2) again right click and open git bash
  3) first need to add all changed files
    => git add .
  4)adn we need to commit all changes
    => git commit -m "any message"
 5) finally we need to push or upload to github repo
   => git push -u origin master

   --visit to github and refresh the page it will be appears
