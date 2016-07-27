<?php
include seat.php;
class table{
	// array of seats
	private $seats;
	
	// we'll use LxWxH instead of "size"
	private $length;
	private $width;
	private $height;

	// table color
	private $color;
	
	//Getters and Setters
	
	/*
	Set the value of the seats array
	Arguments: array[] $seats
	Return: none
	*/
	function setSeats($seats) {
		$this-> seats= $seats;
	}
	/*
	Get the seats array
	Arguments: none
	Return: array[] $seats
	*/
	function getSeats() {
		return $seats;
	}
    /*
	Set the length
	Arguments: int $length
	Return: none
	*/
	function setLength($length) {
		$this->length =$length;
		
	}
	/*
	Get the length
	Arguments: none
	Return: int $length
	*/
	function getLength() {
		return $length;
		
	}
	/*
	Set the width
	Arguments: int $width
	Return: none
	*/
	function setWidth($width) {
		$this->width =$width;
		
	}
	/*
	Get the width
	Arguments: none
	Return: int $width
	*/
	function getWidth() {
		return $width;
	}
	/*
	Set the height
	Arguments: int $height
	Return: none
	*/
	function setHeight($height) {
		$this->height=$height;
		
	}
	/*
	Get the height
	Arguments: none
	Return: int $height
	*/
    function getheight() {
    	return $height;
    	
   	}
    /*
	Set the Color
	Arguments: int $color
	Return: none
	*/
	function setColor($color) {
		$this->color =$color;
	
	}
	/*
	Get the Color
	Arguments: none
	Return: int $color
	*/
	function getColor() {
		return $color;
		
	}
	
	
}
?>