const logout = async () => {
  const response = await fetch('/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    console.log('logged out')
  } else {
    console.log("failed to log out")
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

