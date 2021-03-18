from flask import Flask, render_template, request
import pydig

app = Flask(__name__,template_folder='template')


@app.route("/")
def dns_checker():
    return render_template('dns_checker.html')

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
