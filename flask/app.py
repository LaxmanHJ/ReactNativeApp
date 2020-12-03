from flask import Flask, render_template, request,jsonify
from flask_mysqldb import MySQL
import uuid


app = Flask(__name__)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'piedpiper'

mysql = MySQL(app)


@app.route('/')
def hello():
    return "hello"

@app.route('/signup',method=['POST'])
def signup():
    Username = request.json.get('name',None)
    Userphone = request.json.get('phone',None)
    Usergender = request.json.get('gender',None)

    if request.method == "POST":
        name = Username
        phone = Userphone
        gender = Usergender
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO usersignup(name, phone,gender) VALUES (%s, %s,%s)", (name, phone,gender))
        mysql.connection.commit()
        cur.close()
        return 'success'
    else:
        return 'error'
    # return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True,host = '0.0.0.0')