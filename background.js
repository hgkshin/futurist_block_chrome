var profiles = document.getElementsByClassName('ProfileHeaderCard-bio u-dir');
var blocked = document.getElementsByClassName('user-actions btn-group not-muting blocked')[0];

if (profiles.length === 1 && !blocked) {
  if (profiles[0].textContent.toLowerCase().includes('futurist')) {
    var authToken = document.getElementsByName('authenticity_token')[0].value;
    var userId = document.getElementsByClassName('ProfileNav')[0].getAttribute('data-user-id');

    var postUrl = 'https://twitter.com/i/user/block'

    var xhr = new XMLHttpRequest();
    xhr.open("POST", postUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
    xhr.setRequestHeader('x-twitter-active-user', 'yes');
    xhr.onload = function() {
      document.location.reload();
    };
    xhr.send(`authenticity_token=${authToken}&challenges_passed=false&handles_challenges=1&user_id=${userId}`);
  }
}