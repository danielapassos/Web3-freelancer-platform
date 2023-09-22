// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FreelancePlatform {
    address public client;
    address public freelancer;
    uint256 public amount;
    bool public completed;

    constructor(address _freelancer, uint256 _amount) {
        client = msg.sender;
        freelancer = _freelancer;
        amount = _amount;
        completed = false;
    }

    function completeTask() public {
        require(msg.sender == client, "Only the client can complete the task");
        require(!completed, "Task already completed");

        completed = true;
        payable(freelancer).transfer(amount);
    }
}
