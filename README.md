# exmantica

> The consciousness of good intentions disdains ambiguity. <br> — Alexander Hamilton, _Federalist No. 1_

## Goal

This project will be an attempt to create a tool for easy use and access of probability tables. It will likely be in the form of a Javascript webpage with the ability to import/export files. Hopefully this will be a useful tool for those online prophets who want to be precise, public, and bold in their predictions. 

Order of tasks is (very) roughly as follows:

- [ ] Allow creation of multiple boolean variable tables, such as:
  - |X|P(X)|
    |-|-|
    |+X|`.4`|
    |-X|`.6`|
- [ ] Allow creation of conditional boolean variable tables, such as:
  - |Y|X|P(X\|Y)|
    |-|-|------|
    |+Y|+X|`.4`
    |+Y|-X|`.6`
    |-Y|+X|`.3`
    |-Y|-X|`.7`
- [ ] Move from marginal and conditional distribution tables to joint distribution tables (formatting TBD):
  - |X|Y|P(X,Y)|
    |-|-|-|
    |+X|+Y|`.xxx`
    |+X|-Y|`.xxx`
    |-X|+Y|`.xxx`
    |-X|-Y|`.xxx`
- [ ] Go from a joint distribution table to a set of marginal and conditional probability tables
- [ ] Variables with more than 2 states
- [ ] Perform queries on the data, so rather than finding a table `P(X,Y)`, `P(X)`, or `P(X|Y)`, simply enter it as a query and get the table/number.
- [ ] Import and export a set of tables
- [ ] An embeddable export option for blogs
- [ ] Save a document to the cloud that can be linked to for public reference.
