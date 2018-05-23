#!/bin/bash

rm *.bna

version=0.0.7

npm version $version

echo "###### Creating archive"
composer archive create -t dir -n .

echo "##### Install the business network"
composer network install --card PeerAdmin@hlfv1 --archiveFile smart-columbus-card@$version.bna

echo "#### Start the business network"
composer network start --networkName smart-columbus-card --networkVersion $version --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

echo "#### install the networkadmin card"
composer card import --file networkadmin.card


echo "#### check the network is up"
composer network ping --card admin@smart-columbus-card
