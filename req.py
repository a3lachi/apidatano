import requests





req = requests.get('http://apidatano.vercel.app/api')


print(req.text)