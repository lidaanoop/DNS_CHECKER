from flask import Flask, render_template, request, jsonify, url_for
import pydig
import dns
import dnspython
import dns.resolver
import dnspython as dns
from requests import get
from dns import resolver


app = Flask(__name__,template_folder='template')

@app.route("/", methods=['POST','GET'])
def dns_checker():
    if request.method == 'POST':
        print(request.form['domainname'])
        domainname=request.form['domainname']
        print(domainname)
        arecord = pydig.query(domainname,'A')
        cName=pydig.query(domainname, 'CNAME')
        print(arecord)
        mxRecord = pydig.query(domainname, 'MX')


        return jsonify({ 'arecord': arecord, 'domainname': domainname, 'cName': cName, 'mxRecord': mxRecord })


    return render_template('dns_checker.html')

@app.route("/getdata", methods=['GET'])
def getdata():
    domainname=request.form['domainname']
    print(domainname)
    arecord = pydig.query(domainname,'A')
    cName=pydig.query(domainname, 'CNAME')
    print(arecord)
    # print(cName)
    return jsonify({ 'arecord': arecord, 'domainname': domainname, 'cName': cName })



# @app.route("/process", methods=['POST'])
# def process():
#     domainname=request.form['domainname']
#     arecord = pydig.query(domainname,'A')
#     print(arecord)
#     print("qqqqqqqqqqqqqqqqqqqqq")
#     cName=pydig.query(domainname, 'CNAME')
#     return jsonify({'arecord': arecord, 'cName': cName })




# @app.route("/", methods=['GET', 'POST'])
# def dns_details():
#     if request.method == 'POST':
#         domainname = request.form['domainname']
#         print(domainname)
#         arecord = pydig.query(domainname , 'A')
#         print(pydig.query('www.github.com', 'CNAME'))
#         print(arecord)
#         return render_template('dns_checker.html')


if __name__ == "__main__":
    app.run()
