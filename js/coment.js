let comments = [];
		//اضافة تعليقات     
		function addComment() {
			const nameInput = document.getElementById("nameInput");//هذه يعني يعرف للدالة انها جات من الـالانبت حق الاسم
			const commentInput = document.getElementById("commentInput");// هذه يعني يعرف للدالة انها جات من الـالانبت حق التعليق 

			// هذه يعرف القيمة لههن
			const name = nameInput.value;
			const comment = commentInput.value;

			//هذه شرط للداله يقول لك اذا كان الاسم والتعليق غير متساويات اعمل عداد جديد لك تعليق يضاف مره اخرى 

			if (name !== "" && comment !== "")
			 {
				const commentObj = {
					id: comments.length + 1,
					name: name,
					comment: comment,
					likeCount: 0,
					dislikeCount: 0
				};
                    // وإذا elss
				comments.push(commentObj);
				//هذا ياخذ التعليق من الشرط بعد ما يتم اضافة ويرسله للمصفوفه ويرسل اشعار انه تم اضافة التعليق بنجاح
				displayComments();
				nameInput.value = "";
				commentInput.value = "";
				alert("تمت إضافة التعليق بنجاح!");
			}
		}
		//هذه الداله معروفه
		function displayComments() {
			const commentsContainer = document.getElementById("commentsContainer");
			commentsContainer.innerHTML = "";

			// وهذه معروفه يحجز اماكن في الصفحه للتعليقات الجدد
			comments.forEach((comment) => {
				const commentElement = document.createElement("div");
				commentElement.innerHTML = `
      <strong>${comment.name}:</strong> ${comment.comment}
      <div class="feedback">
        <button class="like-btn" onclick="likeComment(${comment.id})"><i class="fa fa-thumbs-up"></i>Like</button>
        <span id="likeCount-${comment.id}">${comment.likeCount}</span>
    
        <button class="dislike-btn" onclick="dislikeComment(${comment.id})"> <i class="fa fa-thumbs-down"></i>Dislike</button>
        <span id="dislikeCount-${comment.id}">${comment.dislikeCount}</span>
      </div>
    `;
				//هذه المكان الذي تعمل الدالة تفريغ فيه للعناصر الذي مرت من الدواره forEach
				commentsContainer.appendChild(commentElement);
			});
		}

		//هذه الداله معروفه حق زيادة اللايكات لكل تعليق 
		function likeComment(commentId) {
			const comment = comments.find((comment) => comment.id === commentId);
			if (comment) { //هذه شرط بيقول لك اذا التعليقات موجودة الذي هن في المصفوفه يعمل زيادة لكل تعليق 
				comment.likeCount++;

				//هذه الذ تعمل انشاء معرف جديد باستخدام الإيدي لكل تعيلق عشان يضيف العداج حقه وكمان يتبع الشرط حق الداله لك التعليقات 
				const likeCountElement = document.getElementById(`likeCount-${comment.id}`);
				likeCountElement.innerText = comment.likeCount;
			}
		}
		//هذه الداله معروفه حق زيادة الدس لايكات لكل تعليق 

		function dislikeComment(commentId) {
			const comment = comments.find((comment) => comment.id === commentId);

			if (comment) { //هذه شرط بيقول لك اذا التعليقات موجودة الذي هن في المصفوفه يعمل زيادة لكل تعليق 
				comment.dislikeCount++;
				// هذه الذ تعمل انشاء معرف جديد باستخدام الإيدي لكل تعيلق عشان يضيف العداج حقه وكمان يتبع الشرط حق الداله لكل التعليقات 
				const dislikeCountElement = document.getElementById(`dislikeCount-${comment.id}`);
				dislikeCountElement.innerHTML = comment.dislikeCount;
			}
		}