# Loans Application
Application that very (very) naively imitates the process of taking and paying back a loan. Customers register on the website, where they can apply for a loan, manage currently active loans. Employees can approve or reject loan applications. Admin can manage the employees.

This is front-end part for https://github.com/GVabal/sda-java6vilnius-loans-be

#### Technologies used:

Angular 10.2.0, Angular Material 11.0.1

### Run this application locally in development mode:

Requires back-end service mentioned above. Requires Node. After downloading the project, run `npm install` to install needed libraries, then `npm start` to run application. Navigate to http://localhost:4200.

You can log in with one of the demo accounts to start:
```
Login               | Password
-------------------------------
customer@email.com  | password
employee@email.com  | password
admin@email.com     | password
```
<img src="https://user-images.githubusercontent.com/49102436/100538594-60978700-3239-11eb-9d03-4a7a3d863960.png" width="500">
<img src="https://user-images.githubusercontent.com/49102436/100538592-5f665a00-3239-11eb-80ea-8633005f7e56.png" width="500">

Customers can see their active and pending loans, apply for new loan:

<img src="https://user-images.githubusercontent.com/49102436/100538595-62614a80-3239-11eb-93eb-37243075697a.png" width="500">
<img src="https://user-images.githubusercontent.com/49102436/100538599-62f9e100-3239-11eb-85f2-965f4d847b8a.png" width="500">
<img src="https://user-images.githubusercontent.com/49102436/100538597-62f9e100-3239-11eb-9752-c536f14b10b6.png" width="500">

Employees can approve or reject loan applications:

<img src="https://user-images.githubusercontent.com/49102436/100538600-62f9e100-3239-11eb-9cdf-e78ed57c5dad.png" width="500">

Admin can manage employees:

<img src="https://user-images.githubusercontent.com/49102436/100538596-62614a80-3239-11eb-81ca-e7e544cec2b2.png" width="500">
