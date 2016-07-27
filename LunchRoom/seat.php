<?php
include location.php;
class seat{
	private $taken; //boolean 
	private $dirty; //boolean
	private $chair; //boolean
	private $location; // int? position? how do you decide this?
	private $occupant; // if there is an occupant ($taken==true) who are they?
	
	/*
	Constructor
	*/
	function __construct(){
		$this->taken = 0;
		$this->dirty = 0;
		$this->chair = 0;
		$this->location = new location();
		$this->occupant = 0;
		$this->isFriend = false;
	}
	/*
	Get the value of taken
	Arguments: none
	Return: value of $taken
	*/
	 function getTaken() {
		return $taken;
	}
	
	/*
	Set the value of taken
	Arguments: boolean values
	Return: none
	*/
	 function setTaken($taken) {
		$this->taken = $taken;
	}
	
	/*
	Get the value of Dirty
	Arguments: none
	Return: int $dirty
	*/
	 function getDirty() {
		return $dirty;
	}
	
	/*
	Set the value of Dirty
	Arguments: bool $dirty
	Return: none
	*/
	 function setDirty($dirty) {
		$this->dirty = $dirty;
	}
	/*
	Set the value of Chair
	Arguments: bool $chair
	Return: none
	*/
	 function setChair($chair) {
		$this->chair = $chair;
	}
	/*
	Get the value of Chair
	Arguments: none
	Return: bool $chair
	*/
	 function getChair() {
		return $chair;
	}
	/*
	Set the value of Location
	Arguments: int $location
	Return: none
	*/
	 function setLocation($location) {
		$this->location = $location;
	}
	/*
	Get the value of Location
	Arguments: none
	Return: int $location
	*/
	 function getLocation() {
		return $location;
	}
	/*
	Set the value of setOccupant
	Arguments: bool $occupant
	Return: none
	*/
	 function setOccupant($occupant){
		$this->occupant = $occupant;

	}
	/*
	Get the value of setOccupant
	Arguments: none
	Return: bool $occupant
	*/
	 function getOccupant(){
		return $occupant;
	}

}

?>