from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error


app = Flask(__name__)
CORS(app)


# Database Connection
try:
    conn = mysql.connector.connect(
            host='localhost',
            user='root',
            password='1234',
            database='student_api_db'
        )
    if conn.is_connected():
            print("Connected to MySQL")
except Error as e:
    print(f"Error: {e}")

cursor = conn.cursor()

#Add student data
@app.route('/students', methods=['POST'])
def add_student():
    data = request.json
    name = data['name']
    age = data['age']
    gender = data['gender']
    department = data['department']
    subject = data['subject']
    roll_number = data['roll_number']
    phone_number = data['phone_number']
    email = data['email']
    cursor.execute("INSERT INTO students (name, age, gender, department, subject, roll_number, phone_number, email) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
                   (name, age, gender, department, subject, roll_number, phone_number, email))
    conn.commit()
    return jsonify({"message": "Student added successfully"}), 201

#Get student data
@app.route('/students', methods=['GET'])
def get_students():
    cursor.execute("SELECT * FROM students")
    students = cursor.fetchall()
    return jsonify(students)

#Get student based on id
@app.route('/students/<int:id>', methods=['GET'])
def get_student(id):
    cursor.execute("SELECT * FROM students WHERE id = %s", (id,))
    student = cursor.fetchone()
    if student:
        return jsonify(student)
    return jsonify({"message": "Student not found"}), 404

#Update student data
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.json
    name = data['name']
    age = data['age']
    gender = data['gender']
    department = data['department']
    subject = data['subject']
    roll_number = data['roll_number']
    phone_number = data['phone_number']
    email = data['email']
    cursor.execute("UPDATE students SET name=%s, age=%s, gender=%s, department=%s, subject=%s, roll_number=%s, phone_number=%s, email=%s WHERE id=%s",
                   (name, age, gender, department, subject, roll_number, phone_number, email, id))
    conn.commit()
    return jsonify({"message": "Student updated successfully"})

#Delete based on student Roll Number
@app.route('/students/roll_number/<int:roll_number>', methods=['DELETE'])
def delete_student(roll_number):
    cursor.execute("DELETE FROM students WHERE roll_number=%s", (roll_number,))
    conn.commit()
    return jsonify({"message": "Student deleted successfully"})


if __name__ == '__main__':
    app.run(debug=True)


"""

DATABASE QUERIES

create database student_api_db;
use student_api_db;
create table students (
    id int auto_increment primary key,
    name varchar(255) not null,
    age int not null,
    gender varchar(50) not null,
    department varchar(255) not null,
    subject varchar(255) not null,
    roll_number int not null unique,
    phone_number varchar(15),
    email varchar(255)
);

"""