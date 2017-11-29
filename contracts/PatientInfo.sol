pragma solidity ^0.4.10; //We have to specify what version of the compiler this code will use

contract PatientInfo {
    struct Patient {
        uint32 ssn;
        string name;
        string userAddress;
        uint32 phone;
    }
    Patient[] public patients;

    function PatientInfo(uint32 _ssn, string _name, string _userAddress, uint32 _phone) {
        patients.length++;
        patients[patients.length-1].ssn = _ssn;
        patients[patients.length-1].name = _name;
        patients[patients.length-1].userAddress = _userAddress;
        patients[patients.length-1].phone = _phone;
       
    }

    function getUsersCount() public constant returns(uint) {
        return (patients.length);
    }

    function getUser(uint index) public constant returns(uint32, string, string, uint32) {
        
        return (patients[index].ssn, patients[index].name, patients[index].userAddress, patients[index].phone);
    }
}