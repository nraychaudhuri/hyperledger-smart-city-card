
# Hyperledger Fabric and Composer example of smart city card


A simple example of smart city card implemented with Composer and deployed in Fabric with one peer, one orderer and MSP


### Setup

* Install [Docker](https://www.docker.com/get-docker)
* Install [Hyperledger Composer and Playground](https://hyperledger.github.io/composer/latest/installing/development-tools.html)

### Running Fabric

```
$> cd smart-city-card
$> ./downloadFabric.sh
$> ./startFabric.sh
$> ./createPeerAdminCard.sh
```


### Running Composer

To run the example first deploy the composer models and then run the ```composer-playground``` command to launch the webapp.

```
$> cd smart-columbus-card
$> ./deploy.sh
$> composer-playground 
```

### Stopping the application

Stop the composer-playground and then teardown the fabric by running ```stopFabric.sh``` from command line.


### References

* [Hyperledger Fabric v1.1](http://hyperledger-fabric.readthedocs.io/en/latest/blockchain.html)
* [Hyperledger Composer](https://hyperledger.github.io/composer/latest/introduction/introduction) 
