ki-campus


#react
npx create-react-app kicampus
cd kicampus
npm start
cd src
rm -f *
npm install react-router-dom

https://create-react-app.dev/docs/deployment/



npm run build

npm install -g serve
serve -s build


#ec2

sudo systemctl is-enabled httpd
sudo systemctl start httpd && sudo systemctl enable httpd
sudo yum update -y
sudo yum install -y mod_ssl
cd /etc/pki/tls/certs
sudo ./make-dummy-cert localhost.crt

sudo vi /etc/httpd/conf.d/ssl.conf
  uncomment
  SSLCertificateKeyFile /etc/pki/tls/private/localhost.key

sudo systemctl restart httpd

cd /etc/pki/tls/private/
sudo openssl genrsa -out custom.key 4096

sudo chown root:root custom.key
sudo chmod 600 custom.key
ls -al custom.key

sudo openssl req -new -key custom.key -out csr.pem
  ...

sudo wget -r --no-parent -A 'epel-release-*.rpm' https://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/
sudo rpm -Uvh dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-*.rpm
sudo yum-config-manager --enable epel*
sudo yum repolist all

sudo vim /etc/httpd/conf/httpd.conf

...
Listen 80
<VirtualHost *:80>
    DocumentRoot "/var/www/html"
    ServerName "kicampus.de"
    ServerAlias "www.kicampus.de"
</VirtualHost>
...

sudo systemctl restart httpd

sudo yum install -y certbot python2-certbot-apache
sudo certbot



















sources:

react:
https://www.creative-tim.com/blog/web-development/create-single-page-application-using-react/
https://reactjs.org/docs/getting-started.html
https://reactjs.org/tutorial/tutorial.html
https://reactjs.org/docs/hello-world.html

https://babeljs.io/docs/en/editors/
https://github.com/gandm/language-babel#installation

bootstrap:
https://react-bootstrap.github.io/getting-started/introduction/

https on ec2:
https://docs.aws.amazon.com/de_de/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html
https://github.com/R2DEV0/AWS-Domain-EC2-SSL-Cert-React-Deployment/blob/master/AWS%20Domain%2C%20EC2%2C%20SSL%20Cert%2C%20React%20Deployment.pdf
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html

aws general:
https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-cloudformation-codecommit.html
https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-simple-codecommit.html
https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-cloudformation-s3.html
https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-share-repository.html