# Node/Express/Mongoose Reflection

## Set Up
- Fork and clone down this repo into your reflections directory.
- Take a moment to go through the starter code before working on the prompt.
- Remember to run `npm install` to install all dependencies. 

## Prompt
You will be building a small full-stack application with two resources. We have built some of the base to get you started.


### Back End
Your Models will include the following:
- Cohort
    - name: string
    - description: string
    - startDate: date
- Student
    - name:string
    - email: string
    - cohorts: [ref:Cohort]
    - age: number

Student resources must reference one or more cohorts in their data structure.

#### Routes
You will be creating Full CRUD functionality for Cohorts and Students. 
You will be handeling All of the following: 
- Index (Show all)
- Show (Show One)
- Update (Modify One)
- Delete (Remove One)

You will great a single route that will serve an index.html with a public folder. 

### Front End

You will make a request to your Students Index route and append the content of each student object to the section student-list.


## Submission
- Push up your code to your forked repo and submit a pull request. 