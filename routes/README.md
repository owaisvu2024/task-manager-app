# Task Manager App

Yeh ek simple MERN Stack (MongoDB, Express, React, Node.js) based task manager application hai. Is app se aap apne daily tasks ko manage kar sakte hain.

### Features
* **Create Tasks:** Naye tasks, unke title aur description ke saath add kar sakte hain.
* **View Tasks:** Sabhi tasks ko list ki shakal mein dekh sakte hain.
* **Update Tasks:** Maujooda tasks ko edit kar sakte hain, jaise unka title, description, ya status badalna.
* **Delete Tasks:** Tasks ko list se delete kar sakte hain.
* **Search and Filter:** Tasks ko unke title se search kar sakte hain aur unke status ke hisab se filter bhi kar sakte hain (Pending, In Progress, Completed).
* **Progress Tracking:** Ek progress bar dekh sakte hain jo completed tasks ki percentage batata hai.

### Installation and Setup

Project ko run karne ke liye, yeh steps follow karein:

1.  Sabse pehle, project ko clone karein:
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd task-manager-app
    ```
    (Note: `your-username/your-repo-name` ko apni GitHub repository ke naam se badal dein)

2.  Frontend aur backend dono ke liye dependencies install karein:
    ```bash
    npm install
    npm --prefix task-manager-frontend install
    ```

3.  Project ko run karein:
    ```bash
    npm run start-all
    ```
    Is command se backend aur frontend dono ek saath shuru ho jayenge.

### Technologies Used
* **Frontend:** React, Vite, Axios
* **Backend:** Node.js, Express, Mongoose, MongoDB