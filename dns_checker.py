from flask import Flask, render_template, request, jsonify, url_for, session
import pydig
# import express
# import dns
# import dnspython
# import dns.resolver
# import dnspython as dns
# from requests import get
# from dns import resolver





app = Flask(__name__,template_folder='template')
app.secret_key = "abc"
# app("/static", express.static('./static/'));

@app.route("/", methods=['POST','GET'])
def dns_checker():
    if request.method == 'POST':
        session['domainname']=request.form['domainname']
        domainname=session['domainname']
        # print(session['domainname'])
        # print(domainname)
        # arecord = pydig.query(domainname,'A')
        session['arecord'] = pydig.query(domainname,'A')
        arecord=session['arecord']
        # print(arecord[0])
        cName=pydig.query(domainname, 'CNAME')
        # print(arecord)
        mxRecord = pydig.query(domainname, 'MX')

        print(mxRecord)
        return render_template("dns_details.html",arecord=arecord,cName=cName,mxRecord=mxRecord,len=len(arecord),len1=len(mxRecord))
        # return render_template('dns_details.html')


    return render_template('dns_checker.html')



# def get_arecord():
#     arecord = pydig.query(domainname,'A')
#     return arecord
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
    app.config["DEBUG"] = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run()
