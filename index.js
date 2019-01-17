'use strict';
/* global $ */

// capture user input

function getUserInput(){
  return $('#shopping-list-entry').val();
}

// update the DOM with the new element containing the container div filled with user input

function addHtmlGenerator(input){
	$('.shopping-list').append(`
	<li>
        <span class="shopping-item">${input}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
	`);
}

// when user clicks check, update style of value in target div to be strikethrough

// when user clicks delete, remove the target's container div

$(getUserInput);