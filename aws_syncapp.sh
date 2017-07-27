cd ..
rsync -Pazv -e "ssh -i /Users/insinger/hacking/newquip/aws_stackup.pem" newquip ubuntu@54.172.242.200:
cd newquip
