// 1. 先抓到名字欄位，綁定鍵盤 keyup 事件
// 2. 取得使用者輸入的字，使用 checkName 判斷是否符合規則
// 3. 根據上一步判斷決定要顯示 ok 還是 no
// 4. email 欄位也比照名字欄位處理
// 5. 按下註冊按鈕時，應該要再次判斷名字、email 是否正確
// 6. 若都正確，就印出組合成物件的樣子

function checkName(name) {
	return /^[a-z][0-9]{6}/.test(name);
};

function checkEmail(email) {
	return /[a-z0-9]+@[a-z0-9]+\.[a-z]+/.test(email);
};

function changeStatusToOK(elem) {
	elem.classList.remove("no");
	elem.classList.add("ok");
};

function changeStatusToNO(elem) {
	elem.classList.remove("ok");
	elem.classList.add("no");
};

document.querySelector("#name").addEventListener("keyup", function(e) {
	var name = e.target.value;
	var nameStatus = document.querySelector("#nameStatus");
	if( checkName(name) ) {
        changeStatusToOK(nameStatus);
	} else {
        changeStatusToNO(nameStatus);
	}
});

document.querySelector("#email").addEventListener("keyup", function(e) {
	var email = e.target.value;
	var emailStatus = document.querySelector("#emailStatus");
	if( checkEmail(email) ) {
        changeStatusToOK(emailStatus);
	} else {
        changeStatusToNO(emailStatus);
	}
});

document.querySelector("#register").addEventListener("click", function(e) {
	var name = document.querySelector("#name").value;
	var email = document.querySelector("#email").value;

	if( checkName(name) && checkEmail(email) ) {
        var data = {
			name: name,
			email: email
		};
		console.log(data);
	} else {
        console.error("資料格式錯誤");
	}
});