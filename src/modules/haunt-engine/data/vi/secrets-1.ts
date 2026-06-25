import type { HauntStory } from '../../types';

export const SS_VI_1: Record<number, HauntStory> = {
  1: {
    id: 1,
    title: 'Xác Ướp Trỗi Dậy',
    intro:
      'Bụi cuộn vào phòng và một bóng đen lướt qua tim bạn. Một giọng nói lạnh lẽo, ẩm ướt rùng mình trong tâm trí bạn: "Ta đã mất cô dâu của mình từ nhiều năm trước hơn cả những gì ngươi có thể tưởng tượng. Nước mắt ta đã hóa thành bụi, nhưng tình yêu của ta vẫn mạnh mẽ như mặt trời. Giờ đây tình yêu của ta được tái sinh. Ngươi không thể làm gì để chia cắt chúng ta—và nếu ngươi chống lại ta, ta sẽ xé linh hồn ngươi khỏi thân xác và nuốt trọn nó."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng 2 token Knowledge Roll hình tam giác.\nKẻ phản bội mất lá Girl và mọi lợi ích từ nó. Thay vào đó kẻ phản bội đặt một token quái vật nhỏ màu hồng cánh sen (the Girl) vào bất kỳ phòng nào cùng tầng với nơi haunt được lật ra và cách Mummy ít nhất 5 ô (hoặc xa nhất có thể).\nKhi một nhà thám hiểm bước vào phòng có token the Girl, người chơi đó nhận lá Girl.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đang cố cho Mummy cưới the Girl.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn trục xuất Mummy trở về cõi chết trước khi nó cưới được the Girl.',
      },
      {
        heading: 'Cách Trục Xuất Mummy',
        body: 'Nếu Book chưa được đưa vào chơi, anh hùng tiếp theo khám phá ra một phòng omen sẽ lục tìm trong chồng omen và lấy lá Book thay vì rút bình thường, rồi xáo lại chồng đó.\nMột anh hùng phải đọc tên thật của Mummy từ Book để trục xuất nó. Làm theo các bước này theo thứ tự; mỗi anh hùng chỉ được thử một bước mỗi lượt.\n1. Đổ Knowledge 6+ để khám phá tên thật của Mummy, trong phòng có Sarcophagus (chữ tượng hình), Research Laboratory (ghi chú của nhóm), hoặc Library (lịch sử). Nếu thành công, lấy một token Knowledge Roll.\n2. Sau khi bất kỳ anh hùng nào đã khám phá ra cái tên, một anh hùng đang giữ Book có thể thử Knowledge 6+ để tra cứu cái tên và học bùa chú trục xuất. Nếu thành công, lấy một token Knowledge Roll.\n3. Khi các anh hùng đã có hai token này, một anh hùng phải Mang Book đến phòng của Mummy và đánh bại Mummy trong cận chiến Sanity để hoàn thành bùa chú trục xuất.\nMummy miễn nhiễm với đòn tấn công Speed (Revolver, Dynamite).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Một làn gió nóng khô thì thầm xuyên qua phòng khi bạn đóng sầm cuốn cổ thư lại. Xác ướp lê bước về phía bạn, lớp vải quấn rã ra. "Cô dâu của ta... tình yêu duy nhất của ta... không... còn nữa..." Khi phần cuối cùng của xác ướp biến mất, gió ngừng thổi. Bạn chỉ còn lại một mình.',
      },
    ],
    monsters: [],
  },

  2: {
    id: 2,
    title: 'Buổi Cầu Hồn',
    intro:
      'Một cơn lạnh khủng khiếp ập xuống ngôi nhà, và sương mù bốc lên thành những cuộn lười biếng từ sàn nhà. Một giọng nói lạch cạch xuyên qua không khí: "Ta phải được an nghỉ... đưa linh hồn ta về nơi an nghỉ... nếu không thì chết..."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token Knowledge Roll hình tam giác bằng số người chơi. Để riêng số token Sanity Roll hình tam giác bằng số đó và một token item hình ngũ giác (the Corpse).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đang cố triệu hồi một Ghost trước khi bạn làm được.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn hoặc đánh bại Ghost sau khi kẻ phản bội nắm quyền điều khiển nó, hoặc chôn xương của Ghost sau khi bạn triệu hồi được nó.',
      },
      {
        heading: 'Cách Triệu Hồi Ghost',
        body: 'Bạn chạy đua với kẻ phản bội để triệu hồi Ghost bằng cách tổ chức một buổi cầu hồn.\nMỗi anh hùng có thể thử đổ Knowledge hoặc Sanity 5+, nhưng chỉ khi đang ở trong Pentagram Chamber, và chỉ một lần đổ như vậy mỗi lượt. Khi thành công, đặt token trait tương ứng vào phòng nơi haunt được lật ra. Khi các anh hùng đặt được số token bằng một nửa số người chơi (làm tròn xuống), họ đã triệu hồi được Ghost.\nAi hoàn thành buổi cầu hồn trước sẽ điều khiển Ghost.',
      },
      {
        heading: 'Nếu Bạn Triệu Hồi Được Ghost Trước',
        body: 'Lời tuyên bố của Ghost (đọc to): "Hãy chôn xương ta!"\nĐặt token Ghost vào phòng nơi lần đổ cầu hồn cuối cùng thành công; nó ở đó cho đến khi bạn mất quyền điều khiển nó.\nThiết lập thanh Lượt/Sát thương ở số 1. Vào cuối mỗi lượt tiếp theo của người chơi đã hoàn thành buổi cầu hồn, đẩy kẹp tiến lên. Bạn có đến đầu Lượt 5 để chôn xương.\nMột lần mỗi lượt, một anh hùng ở Attic, Bedroom, hoặc Master Bedroom có thể thử Knowledge 5+ để tìm xương; nếu thành công đặt token Corpse lên thẻ nhân vật đó.\nMang Corpse đến Crypt hoặc Graveyard và thử Knowledge 5+ một lần mỗi lượt để chôn xương. Trong khi làm việc này Ghost không thể tấn công. Nếu bạn không chôn xương kịp trước đầu Lượt 5, kẻ phản bội giành quyền điều khiển Ghost và bạn phải tiêu diệt nó thay vì chôn.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Không ai được tấn công cho đến khi buổi cầu hồn hoàn thành.\nKhi kẻ phản bội điều khiển Ghost, bạn chỉ có thể tấn công Sanity vào nó, và chỉ khi bạn có Ring hoặc đang ở trong Pentagram Chamber. Một đòn tấn công Sanity thành công sẽ tiêu diệt Ghost.\nNếu Ghost tấn công một anh hùng và bị đánh bại, nó không hề hấn gì.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Sương mù rút lui, và cái lạnh khủng khiếp đang bóp chặt tim bạn từ từ tan biến. Một cảm giác bình yên và mãn nguyện trỗi dậy thế chỗ. Một linh hồn đã được an nghỉ.',
      },
    ],
    monsters: [],
  },

  3: {
    id: 3,
    title: 'Súp Đùi Ếch',
    intro:
      'Một tiếng cười khúc khích, khàn khàn vang vọng khắp ngôi nhà. "Không, không, không! Đừng có trốn ta, những con khỉ con hư đốn của ta! Các ngươi đã rất hư đốn đấy, lũ cóc nhỏ, dám trộm sách của Ooma. Ta e rằng Ooma sẽ phải đập rụng cái mũi nhỏ của các ngươi mất—hoặc làm gì đó tệ hơn, tệ hơn nhiều."',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Witch đã ếm một bùa chú khiến mụ bất khả xâm phạm. Mụ còn có thể biến người thành Frog.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn giết được Witch.',
      },
      {
        heading: 'Cách Giết Witch',
        body: 'Bạn phải dùng cuốn sách phép (lá Book) để niệm bùa Form of Mortal lên Witch, khiến mụ có thể bị tổn thương. Bùa chú cần một củ mandrake (một token item hình ngũ giác). Làm theo các bước này theo thứ tự; mỗi anh hùng chỉ được thử một bước mỗi lượt.\n1. Tìm một củ mandrake. Khi bạn khám phá ra một phòng mới có mandrake, kẻ phản bội đặt một token Root vào đó (một số có thể nằm trong các phòng đã có).\n2. Trong phòng có token Root, thử Knowledge 4+ để đào củ mandrake lên; nếu thành công đặt token lên thẻ nhân vật của bạn.\n3. Với một token Root và Book, khi đang ở trong phòng của Witch, thử Knowledge 6+ để niệm Form of Mortal. Nếu thành công bạn có thể tấn công Witch bình thường, và bất kỳ đòn tấn công thành công nào cũng giết được mụ. Nếu thất bại, giữ lại Root và thử lại.',
      },
      {
        heading: 'Frog',
        body: 'Một anh hùng bị biến thành Frog sẽ rơi hết mọi lá item và bỏ các companion. Might và Knowledge của anh hùng đó tụt xuống các số thấp nhất nằm trên biểu tượng đầu lâu. Một Frog không thể tấn công, rút lá, hay khám phá phòng; một nhà thám hiểm khác có thể nhặt nó lên và mang đi như một lá item.\nKhi ở cùng phòng với một Frog và đang giữ Book, thử Knowledge 4+ để biến Frog trở lại thành người (các trait trở về giá trị ban đầu).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Witch bất khả xâm phạm và không thể bị tấn công cho đến khi bạn niệm Form of Mortal lên mụ.\nCác nhà thám hiểm có thể tấn công Cat khi nó xuất hiện.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Mụ phù thủy hét lên: "Khôôôông! Ngươi không thể làm thế này! ... Ta sẽ bò vào những cơn ác mộng của ngươi và khiến ngươi chảy máu!" Ngay khi bạn định đập một cái đèn lên đầu mình để chặn cái giọng chói tai của mụ, mụ biến mất... ít nhất là lúc này.',
      },
    ],
    monsters: [],
  },

  4: {
    id: 4,
    title: 'Mạng Lưới Định Mệnh',
    intro:
      'Cái mạng nhện lớn đến nỗi tâm trí bạn từ chối nhìn thấy nó. Giờ đây bạn đã mắc kẹt trong nó, những sợi tơ dính cứng lại trên da bạn. Ở rìa tầm nhìn, một bóng đen tách khỏi trần nhà—một con nhện lướt qua mạng lưới. Nó lơ lửng trên người bạn, và bạn cảm thấy một cái ngòi đâm vào bụng mình. Bạn hét lên... nhưng có ai nghe được không?',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Người lật ra haunt đã bị mắc vào một mạng nhện dính và giờ là một nhà thám hiểm bị kẹt: không thể di chuyển, nhưng vẫn có thể tấn công mạng nhện để phá hủy nó, và có thể dùng hoặc trao đổi item.\nNếu Medical Kit chưa được tìm thấy, bất kỳ anh hùng nào được phép rút item có thể lục tìm trong chồng item và lấy Medical Kit thay vào đó, rồi xáo lại.\nĐể riêng số token Might Roll hình tam giác bằng số người chơi.\nNhà thám hiểm bị kẹt đã bị cấy trứng nhện khổng lồ và chúng sẽ nở ra theo thời gian.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Một con Spider khổng lồ đã thức giấc. Nó muốn bảo vệ nhà thám hiểm bị kẹt cho đến khi trứng của nó nở.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Nhà thám hiểm bị kẹt đã được giải thoát, trứng đã bị phá hủy, và ít nhất một anh hùng thoát ra khỏi ngôi nhà.',
      },
      {
        heading: 'Cách Phá Hủy Mạng Nhện Và Trứng',
        body: 'Chừng nào trứng chưa bị phá hủy, không một trait nào của nhà thám hiểm bị kẹt có thể tụt xuống đầu lâu.\nPhá hủy mạng nhện bằng đòn tấn công Might; mạng nhện phòng thủ với Might 4. Khi đánh bại nó, đặt một token Might Roll vào phòng đó (không bên nào nhận sát thương). Khi phòng chứa số token Might Roll bằng số người chơi, mạng nhện bị phá hủy và nhà thám hiểm bị kẹt có thể hành động bình thường.\nTrong phòng của nhà thám hiểm bị kẹt với Medical Kit, thử Knowledge 4+ để phá hủy trứng. Healing Salve phá hủy trứng mà không cần đổ xúc xắc.',
      },
      {
        heading: 'Cách Thoát Ra Khỏi Nhà',
        body: 'Sau khi nhà thám hiểm được giải thoát và trứng đã bị phá hủy, thử đổ Knowledge hoặc Might 6+ để mở cửa trước ở Entrance Hall. Nếu thành công, rút một lá event và kết thúc lượt của bạn. Ở các lượt sau, các anh hùng còn sống thoát ra từ Entrance Hall bằng cách tiêu tốn 1 ô di chuyển.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Phủi mạng nhện khỏi mắt, bạn loạng choạng bước ra khỏi dinh thự. Ngoái lại, bạn thấy một ánh sáng nhấp nháy từ cửa sổ phía trên—và một cái rùng mình chuyển động, rồi lại một cái nữa. Đã đến lúc rời đi—ngay bây giờ.',
      },
    ],
    monsters: [],
  },

  5: {
    id: 5,
    title: 'Ta Đã Là Người Sói Tuổi Teen',
    intro:
      'Một tiếng hét xé toạc dinh thự, ngày càng lớn cho đến khi trầm xuống thành tiếng tru của cơn thịnh nộ thuần túy. Bóng của bạn run rẩy khi bạn nhận ra mình đang đứng tắm trong ánh trăng tròn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token quái vật nhỏ màu đỏ bằng số người chơi. Để riêng một token item hình ngũ giác (Silver Bullets).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội là một Werewolf ngày càng mạnh hơn và có thể lây bệnh người sói cho người khác, biến họ thành Werewolf luôn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả Werewolf đều chết. Bạn không cần giết Dog để thắng.',
      },
      {
        heading: 'Cách Giết Werewolf',
        body: 'Tìm Revolver và chế tạo Silver Bullets. Mỗi anh hùng chỉ được thử một bước một lần mỗi lượt.\n1. Nếu chưa có Revolver, tìm nó ở Attic, Game Room, Junk Room, Master Bedroom, hoặc Vault: Knowledge 5+ để lục tìm trong chồng item lấy Revolver, rồi xáo lại.\n2. Ở Research Laboratory hoặc Furnace Room, Knowledge 5+ để chế tạo Silver Bullets; lấy token. (Hai nhiệm vụ này có thể được thực hiện theo thứ tự bất kỳ bởi các nhà thám hiểm khác nhau.)\n3. Đưa Silver Bullets và Revolver cho cùng một anh hùng.\n4. Một anh hùng có cả hai có thể giết một Werewolf hoặc Dog.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nếu một Werewolf hoặc Dog gây sát thương cho bạn, bạn đã bị cắn. Vào đầu mỗi lượt tiếp theo của bạn, thử Sanity 4+ để kháng lại lời nguyền. Nếu thất bại bạn trở thành Werewolf và không còn là anh hùng (đọc haunt này trong Traitor\'s Tome và làm mọi thứ trong mục "Ngay Lúc Này"). Các anh hùng bị cắn mà kháng được vẫn thắng nếu các Werewolf bị giết... ít nhất là cho đến lần trăng tròn tiếp theo.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Một anh hùng có Silver Bullets đánh bại một Werewolf hoặc Dog một lần bằng Revolver sẽ giết được nó. (Revolver không bao giờ hết đạn.)',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Mây lướt ngang vầng trăng tròn. Ngôi nhà tối dần và lặng đi khi bạn đứng trên thi thể tan nát của người bạn đã chết. Bạn phải làm thế để sống sót—nhưng bạn có thể sống tiếp với những gì mình đã làm không?',
      },
    ],
    monsters: [],
  },

  6: {
    id: 6,
    title: 'Con Mắt Bay Lơ Lửng',
    intro:
      'Bạn không chắc thứ mình cảm nhận được là một tiếng rít gần như quá cao để nghe hay một tiếng ngân nga gần như quá trầm để cảm. Những ánh đèn xanh lạnh nhấp nháy một lần, rồi lại một lần nữa. Có người hét lên: "Các chủ nhân đã đến đòi chúng ta! Những Con Mắt vĩ đại sẽ nuốt chửng não chúng ta!"',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token Might Roll hình tam giác bằng số người chơi.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Alien có thể dùng khả năng điều khiển tâm trí lên các anh hùng—lên tất cả các anh hùng trong một phòng—nên hãy tản ra nếu có thể.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn vô hiệu hóa Spaceship để nó không thể cất cánh mang theo bạn bè của bạn.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nếu bạn đang bị một Alien điều khiển, kẻ phản bội di chuyển bạn về phía phòng Spaceship. Vào đầu lượt tiếp theo của bạn sau khi bước vào phòng đó, bạn lên Spaceship và ra khỏi cuộc chơi. Bạn không thể tấn công hay hành động khi bị điều khiển.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Giải thoát một anh hùng bị điều khiển bằng cách tấn công và đánh bại anh hùng đó (cận chiến thường hoặc cận chiến Sanity với Ring); một anh hùng bị đánh bại chỉ nhận một nửa sát thương (làm tròn xuống), và bạn nhận sát thương bình thường nếu bị đánh bại. Một khi được giải thoát, một anh hùng không thể bị điều khiển lại.\nMight 5+ để gây sát thương cho Spaceship; mỗi lần thành công đặt một token Might Roll cạnh nó. Khi nó có số token Might Roll bằng số người chơi, Spaceship bị vô hiệu hóa và các anh hùng thắng.\nAlien miễn nhiễm với đòn tấn công Speed (Revolver, Dynamite).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Với sự giúp đỡ của kẻ gọi là bạn của bạn, những sinh vật ngoài hành tinh đó suýt nữa đã bắt được bạn. Ngay cả lúc này, núp trong bụi cây, bạn vẫn cảm thấy những con mắt đang gọi mình. Trong một giây cơ thể bạn nhích lại về phía ngôi nhà. Rồi bạn quay người và chạy, loạng choạng hướng ra con đường và sự an toàn.',
      },
    ],
    monsters: [],
  },

  7: {
    id: 7,
    title: 'Dây Thường Xuân Ăn Thịt',
    intro:
      'Một âm thanh khô khốc, rin rít vang vọng khắp ngôi nhà. Thoạt đầu bạn chắc rằng những con rắn chuông khổng lồ đang đến, nhưng rồi bạn thấy những tua dây leo ép vào cửa sổ. Khi kính vỡ tan, bạn nhận ra đám cây đang đến—đến vì bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng một token item hình ngũ giác để đại diện cho Plant Spray.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Mỗi cặp Root/Tip trong nhà là một Creeper. Creeper sẽ cố tóm lấy bạn. Đám cây ăn thịt nuôi sống bằng phân bón làm từ xác chết.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn dùng Plant Spray để giết số Creeper bằng số người chơi.',
      },
      {
        heading: 'Cách Chế Tạo Plant Spray',
        body: 'Mang Book đến Research Laboratory hoặc Kitchen. Một lần mỗi lượt trong một trong các phòng đó với Book, thử Knowledge 5+ để chế tạo Plant Spray; lấy token. Bạn chỉ có thể chế tạo nó một lần—nếu bị phá hủy, bạn không thể làm thêm.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Tự động giết một Creeper bằng cách mang Plant Spray vào phòng có token Root hoặc Tip và dùng nó thay vì tấn công trong lượt đó. (Bạn có đủ xịt cho tất cả Creeper.)\nRoot không thể tấn công và chỉ bị ảnh hưởng bởi Plant Spray. Tip tấn công và bị tấn công bình thường.\nNếu một Tip đánh bại một anh hùng trong cận chiến vật chất, anh hùng không nhận sát thương nhưng bị tóm và rơi hết item trong phòng đó; Tip sau đó kết thúc di chuyển của nó.\nĐánh bại một Tip làm nó choáng và nó thả anh hùng đang bị tóm.\nRoot không làm chậm di chuyển, nhưng Tip thì có.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nếu bạn bị tóm, bạn không thể dùng item nhưng vẫn có thể tấn công Tip đang tóm bạn. Đánh bại nó để được thả ra (rồi di chuyển và hành động); nếu Tip đánh bại bạn, không có sát thương nhưng lượt của bạn kết thúc.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Các tua dây quằn quại và quẫy đạp, rồi luồn đi, co rút trở lại lòng đất. Âm thanh duy nhất bạn nghe thấy là tiếng nức nở. Nhưng ai đang khóc vậy? Ồ—là bạn đấy.',
      },
    ],
    monsters: [],
  },

  8: {
    id: 8,
    title: 'Tiếng Khóc Của Banshee',
    intro:
      'Đầu tiên bạn nghe thấy một tiếng cào sột soạt khẽ trên tường, rồi một thoáng những bộ áo bạc rách rưới. Có thứ gì đó bước vào phòng sau lưng bạn. Sinh vật thở dài, và bạn cảm thấy một cơn lạnh khủng khiếp khoan vào tim mình. Cái chết đã cận kề.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token Knowledge Roll hình tam giác bằng số người chơi. Để riêng số token Sanity Roll hình tam giác bằng số đó.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã dùng Spirit Board để triệu hồi một Banshee độc ác. Khi đang mang Spirit Board, kẻ phản bội miễn nhiễm với tiếng khóc của Banshee.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn thực hiện thành công một lễ trừ tà để trục xuất Banshee.',
      },
      {
        heading: 'Cách Trục Xuất Banshee',
        body: 'Lễ trừ tà cần số lần đổ trừ tà thành công bằng số người chơi. Mỗi anh hùng chỉ được thử một lần đổ trừ tà mỗi lượt.\nSanity 5+ khi ở trong Chapel, Crypt, hoặc Pentagram Chamber, hoặc đang mang Holy Symbol hoặc Spirit Board.\nKnowledge 5+ khi ở trong Library hoặc Research Laboratory, hoặc đang mang Book hoặc Crystal Ball.\nMỗi lần thành công đặt token trait tương ứng lên thẻ item hoặc ô phòng đã dùng. Khi một anh hùng đã dùng một item hoặc phòng cho một lần đổ trừ tà, không anh hùng nào được dùng lại item hoặc phòng đó nữa. Khi số token đặt được bằng số người chơi, Banshee bị trục xuất.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Banshee không thể bị tấn công. Trộm Spirit Board từ kẻ phản bội sẽ khiến kẻ phản bội bị tổn thương trước Banshee nhưng không cấp miễn nhiễm cho anh hùng đang mang Board.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Tiếng rít chói tai ngày càng gần; tường rung lên; tóc bạn bạc trắng. Tay nắm cửa xoay khi bạn hét lên những lời cuối cùng của lễ trừ tà. Rồi... im lặng.',
      },
    ],
    monsters: [],
  },

  9: {
    id: 9,
    title: 'Vũ Điệu Tử Thần',
    intro:
      'Mọi chiếc đồng hồ trong nhà điểm nửa đêm—dù bạn chắc rằng chưa muộn đến thế. Một nghệ sĩ vĩ cầm đơn độc chơi một giai điệu ma quái mời gọi bạn khiêu vũ. Âm nhạc khiến linh hồn bạn co rút lại, nhưng cũng khiến môi bạn cong lên thành một nụ cười.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Haunt này không bắt đầu với một kẻ phản bội—chỉ có các anh hùng. Mỗi anh hùng có cơ hội trở thành kẻ phản bội trong lượt của mình.\nNếu Pentagram Chamber và Stairs from Basement không có trong nhà, người lật ra haunt lục tìm trong chồng phòng và đặt chúng vào tầng hầm (Pentagram Chamber càng xa người lật càng tốt). Làm tương tự cho Ballroom, nối nó với một phòng tầng trệt. Rồi xáo lại.\nĐể riêng số token Sanity Roll hình tam giác bằng số người chơi.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Đâu đó trong nhà một Dark Fiddler đang chơi thứ âm nhạc cắn vào não bạn. Một vũ điệu tử thần đã bắt đầu trong Ballroom.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn trục xuất được Dark Fiddler.',
      },
      {
        heading: 'Cách Trục Xuất Fiddler',
        body: 'Hoàn thành các bước này theo thứ tự; chỉ một bước mỗi lượt.\n1. Anh hùng đang mang Holy Symbol di chuyển đến Pentagram Chamber và không thể tự nguyện đưa nó đi.\n2. Một anh hùng ở Pentagram Chamber với Holy Symbol có thể thử Sanity 5+ để chống lại Fiddler (bạn chỉ cần ở cùng phòng với Symbol). Nếu thành công đặt một token Sanity Roll vào đó.\n3. Khi căn phòng có số token Sanity Roll bằng số nhà thám hiểm vào lúc đầu haunt, Fiddler bị trục xuất.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Vào đầu lượt của bạn, thử Sanity 4+ để kháng lại sự dụ dỗ của Fiddler, trừ khi đang mang Holy Symbol. Nếu bạn thất bại trong Ballroom, bạn hóa điên và trở thành kẻ phản bội (đọc haunt này trong Traitor\'s Tome). Nếu bạn thất bại ở nơi khác, nhận 1 sát thương tinh thần; nếu Sanity của bạn tụt xuống đầu lâu, bạn trở thành kẻ phản bội thay vì chết. Nếu không, di chuyển về phía Ballroom theo lộ trình ngắn nhất qua các phòng đã khám phá (bạn có thể hành động trên đường đi).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Dark Fiddler không thể bị tấn công.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Nghệ sĩ vĩ cầm chơi nhanh hơn khi bạn tụng những lời trục xuất hắn. Mưa rơi từ trần nhà. Mặt hắn tan chảy như sáp trong lửa, và thứ âm nhạc đẹp đẽ kinh hoàng kia chỉ tắt khi phần cuối cùng của thân xác hắn biến mất trong cơn mưa xối xả.',
      },
    ],
    monsters: [],
  },

  10: {
    id: 10,
    title: 'Sum Họp Gia Đình',
    intro:
      'Gã điên nghiêng đầu, lắng nghe. "Ngươi có nghe thấy không? Dưới sàn nhà, nơi ta đã chôn họ. Gia đình ta." Sàn nhà nứt toác và hai cái xác trồi lên dưới ánh sáng. Một cái nhìn người bạn phản bội của gã điên với một nụ cười đầy giòi bọ. Tiếng bước chân nặng nề trầm đục vang vọng khắp ngôi nhà.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Madman và các Zombie muốn giết bạn. Bạn có thể bẫy các Zombie bằng cách dụ chúng vào những căn phòng từng quan trọng với chúng khi còn sống.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn bẫy được tất cả các Zombie.',
      },
      {
        heading: 'Cách Bẫy Zombie',
        body: 'Dụ các Zombie vào những căn phòng yêu thích của chúng bằng cách lợi dụng sự đần độn một chiều của chúng.\nZombie di chuyển chậm, luôn về phía anh hùng gần nhất mà chúng nhìn thấy.\nBạn có thể bẫy chúng trong Master Bedroom, Chapel, Conservatory, Game Room, Library, và Attic.\nKhi một Zombie bước vào hoặc bắt đầu một lượt trong một trong những phòng đó, nó phải thử Knowledge 4+ để tránh bị bẫy. Nếu thất bại nó không tấn công và ở lại đó yên ổn cho hết phần còn lại của ván (lật úp token của nó).\nMột khi một Zombie bị bẫy trong một phòng, phòng đó không thể bẫy một Zombie khác.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: '"Con xin lỗi mẹ!" gã điên hét lên. Một tiếng nức nở sủi lên từ hàm răng cứng đờ của một trong những cái xác lê bước. Bạn đã bỏ lại Mẹ đêm đó, nhưng đôi khi bạn nghĩ mình vẫn còn nghe được tiếng nức nở của bà rỉ lên qua những tấm ván sàn.',
      },
    ],
    monsters: [],
  },

  11: {
    id: 11,
    title: 'Hãy Để Chúng Vào',
    intro:
      'Bên ngoài cửa sổ, sương mù cuộn xoáy—những hình thù dần thành hình trong làn hơi. Từ nơi nào đó bạn nghe gã điên hét lên: "Cuối cùng cũng được! Mở toang cửa sổ ra!" Một cơn gió lạnh chơi đùa khắp nhà, thì thầm những lời đe dọa đầy mê hoặc vào tai bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token Sanity Roll hình tam giác bằng số người chơi. Để riêng số token Knowledge Roll hình tam giác bằng số đó.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội và Madman đang cố để các Specter vào. Các Specter sẽ cố giết bạn và không thể bị tấn công vật chất.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn trục xuất tất cả các Specter, hoặc bằng một lễ trừ tà, hoặc bằng cách đánh bại từng con bằng đòn tấn công Sanity (dùng Ring).',
      },
      {
        heading: 'Cách Thực Hiện Lễ Trừ Tà',
        body: 'Lễ trừ tà cần số lần đổ trừ tà thành công bằng số người chơi. Chỉ một lần đổ trừ tà mỗi lượt.\nSanity 5+ trong Chapel, Crypt, hoặc Pentagram Chamber, hoặc đang mang Holy Symbol hoặc Ring.\nKnowledge 5+ trong Library hoặc Research Laboratory, hoặc đang mang Book hoặc Crystal Ball.\nMỗi lần thành công đặt token trait tương ứng lên ô phòng hoặc thẻ item đã dùng. Một khi đã dùng, một item hoặc phòng không thể được dùng lại trong lễ trừ tà. Khi số token đặt được bằng số người chơi, các Specter bị trục xuất.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn có thể tấn công Sanity vào một Specter nếu bạn có Ring; đánh bại nó sẽ trục xuất nó. Đánh bại một Specter khi nó tấn công bạn sẽ làm nó choáng.\nKhi Madman còn đang tập trung vào việc để các Specter vào thì hắn sẽ không tấn công, nhưng hắn có thể tự vệ.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Các nghi thức đã được tuân thủ. Lễ trừ tà thành công. Cửa sổ đã đóng. Các Specter đã bị trục xuất. Nhưng... cái thoáng chuyển động ngoài cửa sổ kia là gì vậy? Tốt nhất là đừng để chúng vào lần nữa.',
      },
    ],
    monsters: [],
  },

  12: {
    id: 12,
    title: 'Kẻ Bước Trong Da Thịt',
    intro:
      'Quả cầu pha lê nhấp nháy với hình ảnh căn phòng bạn đang đứng, trong đó có một quả cầu pha lê, và cứ thế tiếp diễn, như thể bạn đang rơi vào một cái giếng đầy những hình ảnh giống hệt nhau. Rồi một hình ảnh mới hình thành: sảnh vào, nơi mọi người đang đến. Một trong những kẻ mới đến nhìn thẳng vào mắt bạn. Đó là mắt của bạn. Đó là kẻ song trùng của bạn—người sinh đôi xấu xa của bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt số token quái vật nhỏ (Evil Twin) vào Entrance Hall bằng số người chơi, dùng các màu khác nhau, mỗi cái khớp với một anh hùng cụ thể.\nNgười chơi bên trái người lật ra haunt đi trước.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Haunt này không có kẻ phản bội—chỉ có các anh hùng. Các Evil Twin giống hệt bạn, nhưng chúng muốn giết bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Anh hùng của bạn còn sống và tất cả các Evil Twin đều chết.',
      },
      {
        heading: 'Các Evil Twin Phải Làm Điều Này',
        body: 'Sau lượt của người lật ra haunt, các Evil Twin hành động trong lượt quái vật. Mỗi con đổ xúc xắc di chuyển như một quái vật và di chuyển về phía anh hùng tương ứng của nó theo lộ trình ngắn nhất. Nếu nó kết thúc lượt trong một phòng có anh hùng bất kỳ, nó tấn công (đối tác của nó nếu có thể; nếu không thì ngẫu nhiên).\nNếu một anh hùng của người chơi bị giết, người chơi đó nắm quyền điều khiển Evil Twin của anh hùng đó và tấn công các nhà thám hiểm khác.\nMỗi Evil Twin có các giá trị trait ban đầu của đối tác; những trait đó không thay đổi. Evil Twin không thể mang item hoặc giữ companion.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu không có Crystal Ball khi bạn tấn công hoặc phòng thủ trước chính Evil Twin của mình, bạn mất thêm 1 điểm ở mỗi trait bất kể ai thắng; nếu Twin của bạn đánh bại bạn, bạn cũng nhận sát thương bình thường. Đánh nhau với Twin của người khác không tốn điểm thêm.\nVới Crystal Ball, bạn giết Evil Twin của mình khi đánh bại nó.\nĐánh bại Twin của một anh hùng khác sẽ làm nó choáng, trừ khi bạn có Crystal Ball và anh hùng đó đã chết (khi đó bạn giết nó). Người giữ Crystal Ball có thể tấn công các Twin đang choáng.\nBạn có thể lấy Crystal Ball từ một anh hùng tự nguyện ở cùng phòng trong lượt của bạn.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Run rẩy, bạn lùi lại. Thân xác bạn nằm chết trên sàn. Không phải thân xác bạn, bạn tự nhủ. Kẻ song trùng của bạn. Bạn phải giết nó. Là bạn hoặc là nó, đúng không? Đúng không?',
      },
    ],
    monsters: [],
  },

  13: {
    id: 13,
    title: 'Liệu Có Mơ Chăng',
    intro:
      'Tỉnh dậy đi, tỉnh dậy đi! Sao kẻ mộng du không chịu tỉnh? Một trong những nhà thám hiểm đồng hành của bạn đã ngủ thiếp đi trong phòng ngủ. Không gì đánh thức được kẻ mộng du đang vùng vẫy, hét lên: "Quay lại đi! Đừng làm thế!" Chắc là một cơn ác mộng.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token Sanity Roll hình tam giác bằng số người chơi. Để riêng số token Might Roll hình tam giác bằng số đó.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Tiềm thức của kẻ mộng du đã giải phóng các Nightmare ra khắp ngôi nhà. Nếu đủ số con thoát ra, bạn thua. Bạn không biết bao nhiêu con cần thoát ra (kẻ phản bội thì biết), nên hãy chặn càng nhiều càng tốt.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đánh thức kẻ mộng du trước khi một số lượng Nightmare không xác định thoát ra thế giới. (Kẻ phản bội biết con số chính xác đó.)',
      },
      {
        heading: 'Cách Đánh Thức Kẻ Mộng Du',
        body: 'Mang Holy Symbol đến chỗ kẻ mộng du và dùng nó để đánh thức họ.\n1. Mang Holy Symbol đến phòng có thân xác kẻ mộng du.\n2. Khi một anh hùng giữ Symbol ở đó, bất kỳ anh hùng nào trong phòng có thể thử đổ Sanity hoặc Might 5+ để đánh thức kẻ mộng du; mỗi lần thành công lấy một token trait tương ứng. Kẻ mộng du thức dậy khi các anh hùng có số token bằng số người chơi.\n3. Không thể dùng lá Smelling Salts để đánh thức kẻ mộng du.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nightmare gây sát thương tinh thần thay vì sát thương vật chất.\nNếu bạn tấn công một Nightmare và đánh bại nó, nó bị giết thay vì bị choáng.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Những cơn ác mộng lang thang mất hết sự gắn kết và biến mất. Kẻ mộng du hét lên một tiếng cuối cùng bằng giọng trầm sâu, địa ngục: "KHÔÔÔNG! Đừng bắt ta quay lại!" Bạn của bạn tỉnh dậy, chớp mắt, và nói: "Tớ vừa có một giấc mơ kỳ lạ nhất."',
      },
    ],
    monsters: [],
  },

  14: {
    id: 14,
    title: 'Các Vì Sao Đã Vào Vị Trí',
    intro:
      'Các kệ sách chất đầy những cuốn cổ thư hiểm ác nói về cái ác, cái chết, sự điên loạn, và tên của Những Thứ Không Nên Tồn Tại. Tiếng tụng kinh nhịp nhàng vang vọng khắp các hành lang—một giáo phái hò hét để triệu hồi một sinh vật cổ đại, giọng to nhất là của người bạn phản bội của bạn. Kẻ phản bội đến đây để hoàn thành nghi lễ bằng cách mang đến cho các tín đồ mọi thứ họ cần... bao gồm cả vật tế người.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token item hình ngũ giác (lon Paint) bằng số người chơi. Đặt một cái vào mỗi phòng sau, theo thứ tự, càng nhiều càng tốt: Kitchen, Larder, Junk Room, Storeroom, Research Laboratory, Attic. Nếu có nhiều token hơn số phòng, đặt số dư vào các phòng đó (lại theo thứ tự). Nếu không có phòng nào đang trong nhà, lục tìm trong chồng phòng một cái, đặt nó vào một tầng hợp lệ, đặt tất cả token Paint lên nó, rồi xáo lại.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội cộng tác với một giáo phái cuồng tín. Các Cultist đang triệu hồi vị thần của họ bằng cách mang vật tế vào Pentagram Chamber—item, vài lá omen, và xác các nhà thám hiểm. Bạn không biết cần bao nhiêu vật tế, nên hãy chặn chúng nhanh nhất có thể.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn làm ô uế pentagram trước khi vị thần được triệu hồi.',
      },
      {
        heading: 'Cách Làm Ô Uế Pentagram',
        body: 'Tìm các lon sơn và hắt chúng lên sàn của Pentagram Chamber.\nBạn chỉ có thể mang một token Paint một lúc.\nHắt một token Paint vào Pentagram Chamber từ một phòng kề bên có cửa thông (tính là 1 ô di chuyển).\nBạn phải hắt mọi token Paint trong nhà vào Pentagram Chamber để làm ô uế nó.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu nhà thám hiểm của bạn bị giết, lật ngả quân cờ để đánh dấu xác. Một Cultist hoặc kẻ phản bội có thể nhặt lên và mang xác bạn như một item; khi đang mang nó, bước vào một phòng tốn 2 ô di chuyển.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Ngôi nhà rung chuyển; các bức tường rịn mồ hôi khi vị thần đáng sợ của các tín đồ đến gần. Ngay khi thế giới của bạn sắp bị xé toạc đi, sơn bắn tung tóe khắp sàn, làm ô uế pentagram. Thế giới đã an toàn, ít nhất là lúc này, nhưng tiếng tụng kinh của các tín đồ vẫn còn cháy bỏng trong tâm trí bạn, và máu nhỏ giọt từ đôi tai bị tổn thương của bạn. Theo thời gian thân xác bạn sẽ lành... nhưng linh hồn bạn thì sao?',
      },
    ],
    monsters: [],
  },

  15: {
    id: 15,
    title: 'Nơi Đây Có Rồng',
    intro:
      'Một trong các nhà thám hiểm của bạn nhặt lên một mẩu giấy và lẩm bẩm gì đó. Cửa trước bật tung và một con rồng khổng lồ gầm rú lao vào, hoành hành và phun lửa! Bạn của bạn chỉ tay, hét lên: "Ăn chúng đi, rồng ơi! Ăn hết bọn chúng đi!"',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Dragon muốn giết tất cả các bạn. Nó có thể phun lửa và cắn. Bạn sẽ cần vũ khí và giáp đặc biệt để đánh bại một con thú dữ tợn như vậy.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn hạ gục con rồng.',
      },
      {
        heading: 'Cách Hạ Gục Dragon',
        body: 'Bạn sẽ cần Antique Armor (một token item hình ngũ giác), Shield (một token item hình ngũ giác khác), và lá Spear. Antique Armor và Shield đều ở đâu đó trong tầng hầm.\nAntique Armor: một item độc nhất khác với lá Armor; nó không thể bị trộm bằng đòn tấn công đặc biệt và không thể mặc cùng với Armor. Dùng cả lượt để mặc vào hoặc cởi ra và đưa nó đi (không thể di chuyển/hành động trong lượt đó). Khi mặc, nhận ít hơn 5 sát thương vật chất nhưng di chuyển ít hơn 1 ô; nó không bảo vệ khỏi lửa hay nhiệt.\nShield: khi mang nó bạn miễn nhiễm với sát thương lửa và nhiệt nhưng di chuyển ít hơn 1 ô (ít hơn 2 ô nếu mang cả Antique Armor). Mọi anh hùng ở cùng phòng với người mang Shield đều miễn nhiễm với hơi thở lửa của Dragon.\nSpear: ngoài lợi ích cộng Might, cộng thêm 4 vào lần đổ của bạn khi tấn công hoặc phòng thủ trước Dragon bằng Might.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi trúng hơi thở lửa của Dragon, bạn có thể bỏ một item để nhận ít hơn 2 sát thương vật chất (lặp lại với nhiều item).\nKẻ phản bội theo dõi sát thương gây ra cho Dragon và thông báo khi nó bị hạ gục.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Con rồng run rẩy, rồi nằm bất động khi khói bốc lên từ lỗ mũi nó. Giờ bạn phải đối phó với kẻ phản bội, đang nhe răng cười như một thằng ngốc. "Nhưng đây là một giấc mơ mà!" kẻ phản bội phản đối. Khá là cảm động, cho những lời cuối cùng.',
      },
    ],
    monsters: [],
  },

  16: {
    id: 16,
    title: 'Vòng Tay Của Bóng Ma',
    intro:
      'Người bạn đồng hành của bạn luôn quá ám ảnh với cô gái đó, ghen tị với tình bạn giữa cô ta và bạn. Giờ hắn đã nhốt cô ta trong ngôi nhà. Bạn nghe cô ta hét lên, rồi im lặng. Một tiếng cười trầm vang lên từ bên dưới, theo sau là một tiếng tích tắc khẽ khàng. Nghe như bộ đếm giờ của một quả bom. Thực ra thì đúng là vậy.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Người bạn phản bội của bạn đã triệu hồi một Phantom để canh giữ the Girl, giấu trong tầng hầm, và đặt một cái bẫy bom. Bạn không có nhiều thời gian.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn giải cứu the Girl rồi hoặc tháo ngòi bom hoặc trốn thoát cùng the Girl trước khi nó nổ.',
      },
      {
        heading: 'Cách Giải Cứu Girl',
        body: 'Đầu tiên tìm Phantom và giải cứu the Girl; sau đó tìm và tháo ngòi bom—hoặc thoát ra.\nPhantom (và the Girl) xuất hiện ở phòng tầng hầm tiếp theo bạn khám phá có biểu tượng event hoặc omen; kẻ phản bội đặt token của chúng ở đó.\nThay vì rút một lá cho phòng đó, hãy tấn công Phantom. Đánh bại nó để giết nó và giành quyền giữ the Girl. Nếu nó đánh bại bạn, bạn nhận sát thương bình thường và nó trốn thoát cùng the Girl (gỡ bỏ cả hai token); Phantom xuất hiện lại ở phòng event/omen tầng hầm tiếp theo bạn khám phá.\nNếu cả tầng hầm đã được khám phá, kẻ phản bội đặt Phantom và the Girl vào bất kỳ phòng tầng hầm nào (không bao giờ cùng một phòng hai lần).',
      },
      {
        heading: 'Cách Tháo Ngòi Bom',
        body: 'Một lần mỗi lượt, thử Knowledge 7+ trong phòng nơi Phantom bị đánh bại để tháo ngòi bom.',
      },
      {
        heading: 'Cách Thoát Ra Khỏi Nhà',
        body: 'Thử đổ Knowledge (cạy khóa) hoặc Might (phá cửa) 6+ để mở cửa trước ở Entrance Hall. Nếu thành công, rút một lá event và kết thúc lượt của bạn. Ở các lượt sau, tất cả các anh hùng có thể di chuyển 1 ô ra cửa trước để trốn thoát.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Cô gái nức nở trong vòng tay bạn khi bạn chạy trốn. Bạn vẫn còn nghe được tiếng tích tắc quái quỷ đó. Ngoái lại, bạn thấy một bóng hình đơn độc ở cửa sổ tầng trên, đưa một bàn tay lên ô kính khi bạn đi qua cổng sắt của dinh thự.',
      },
    ],
    monsters: [],
  },

  17: {
    id: 17,
    title: 'Một Cơn Gió Thoảng',
    intro:
      'Khi bạn di chuyển qua phòng, một số mảnh vụn bắt đầu rung lên, nhấc bổng khỏi sàn. Chẳng mấy chốc một đám đồ vật vỡ nát xoay tròn trong không trung, và bạn nghe một tràng cười điên loạn khi những mảnh rác lao về phía bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng vài token item hình ngũ giác để đại diện cho Candle.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Chúng đang cố giết bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn trừ tà được Poltergeist.',
      },
      {
        heading: 'Cách Thực Hiện Lễ Trừ Tà',
        body: 'Lễ trừ tà này cần đốt các Candle.\nMột lần mỗi lượt trong Kitchen, Dining Room, Chapel, hoặc Gallery, thử Speed 3+ để tìm một Candle; nếu thành công đặt một token Candle lên thẻ nhân vật của bạn (có thể tìm thấy nhiều hơn một trong một phòng).\nKhi đang mang một Candle, bạn có thể bỏ nó trong bất kỳ phòng nào trên tầng có haunt được lật ra và thử Knowledge 5+. Nếu thành công đặt token Candle ở đó (không đổ Knowledge thêm trong phòng đó); nếu thất bại Candle bị mất. Một Candle đã đặt không thể bị Poltergeist hoặc kẻ phản bội lấy. Khi bạn đã đặt số token Candle bằng số anh hùng lúc haunt được lật ra, bạn trừ tà được Poltergeist.\nMột anh hùng có lá item Candle có thể dùng (và bỏ) nó thay cho một token Candle khi đổ Knowledge, đặt một token item hình ngũ giác nếu thành công.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Poltergeist miễn nhiễm với đòn tấn công Might và không thể bị Revolver làm hại. Dynamite có tác dụng lên nó (xem Traitor\'s Tome).\nBất kỳ anh hùng nào trong phòng của Poltergeist có thể tấn công nó bằng Speed; đánh bại nó không gây sát thương nhưng cho phép bạn trộm một item nó đang mang. Nếu nó đánh bại bạn, nhận 1 xúc xắc sát thương vật chất.\nMột anh hùng đang mang Ring, Skull, hoặc Bell có thể tấn công Poltergeist bằng Sanity; đánh bại nó giảm thanh Lượt/Sát thương đi bằng chênh lệch giữa hai lần đổ. Nếu nó đánh bại bạn, nhận 1 xúc xắc sát thương tinh thần.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Ngọn nến lập lòe và đốt bỏng tay bạn khi bạn đọc những lời lần cuối. Với một tiếng đổ vỡ kinh tởm, đám mảnh vụn bay lượn lao đi tứ phía, làm móp các bức tường. Rồi, tất cả lặng im.',
      },
    ],
    monsters: [],
  },

  18: {
    id: 18,
    title: 'Đoàn Kết Là Sức Mạnh',
    intro:
      'Bạn nghe người bạn của mình hét lên, nhưng đến khi bạn tới nơi, anh ta đã là một quái vật, thịt da chảy tràn qua xương như cao su nóng chảy. Loại thịt da như thế không thể bị cắt bằng vũ khí thường. Nhưng lửa sẽ làm nó tan chảy hết. Một đám lửa đủ lớn sẽ thiêu rụi người bạn quái vật của bạn và mọi nỗi kinh hoàng của ngôi nhà này mãi mãi.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu ô Stairs from Basement không có trong nhà, lục tìm trong chồng phòng và đặt nó vào tầng hầm, rồi xáo lại.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội thèm khát thịt da của bạn, và chỉ có thiêu rụi ngôi nhà mới giết được quái vật.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Đám cháy nhà giết được kẻ phản bội.',
      },
      {
        heading: 'Cách Thiêu Rụi Ngôi Nhà',
        body: 'Khám phá và di chuyển đến Furnace Room; Knowledge 5+ để chỉnh lò sưởi quá nhiệt. Vào cuối lượt tiếp theo của anh hùng đã làm việc này, Furnace Room nổ tung (lật úp nó); bất kỳ ai trong đó (kể cả kẻ phản bội) đều bị giết.\nTừ đó về sau, vào cuối mỗi lượt của mọi nhà thám hiểm (kể cả kẻ phản bội), một phòng mới bắt lửa và giết bất kỳ ai trong đó (lật ô). Một phòng chỉ có thể bắt lửa nếu kề với một phòng đã cháy (không cần cửa). Người chơi của các anh hùng đã chết không thể lan lửa, nhưng kẻ phản bội thì phải.\nKhi lửa lan đến Stairs from Basement, một nhà thám hiểm sau đó có thể phá hủy Foyer; lửa sau đó lan đến Entrance Hall và Grand Staircase (đánh dấu bằng token item). Lửa cũng có thể lan qua Coal Chute hoặc lên Collapsed Room. Khi Foyer, Entrance Hall, và Grand Staircase cháy, ngôi nhà sụp đổ, giết bất kỳ ai còn lại bên trong.',
      },
      {
        heading: 'Cách Thoát Khỏi Nhà',
        body: 'Thử đổ Knowledge (cạy khóa) hoặc Might (phá cửa) 4+ để mở cửa trước ở Entrance Hall. Nếu thành công, rút một lá event và kết thúc lượt của bạn. Ở các lượt sau, tất cả nhà thám hiểm di chuyển 1 ô ra cửa trước để trốn thoát. Kẻ phản bội ban đầu không thể đi qua cửa trước—các anh hùng trốn thoát đã chặn nó lại phía sau.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Ngôi nhà sụp đổ thành một biển lửa cháy rực. Một kết cục xứng đáng cho một nơi tà ác như vậy và cái thứ mà bạn của bạn đã hóa thành. Tuy nhiên, nhìn vào những ngọn lửa đỏ rực, bạn không khỏi ngưỡng mộ bí mật đã mất đi trong đó. Suy cho cùng, chẳng phải tất cả chúng ta đều mạnh hơn khi đoàn kết hay sao?',
      },
    ],
    monsters: [],
  },

  19: {
    id: 19,
    title: 'Một Người Bạn Cho Muôn Đời',
    intro:
      'Phòng tranh treo đầy những bức họa cổ. Mắt bạn dừng lại ở một bức trông quen lạ kỳ—khuôn mặt của một trong những người bạn của bạn, hằn dấu thời gian và những vết thương chí mạng. Một tấm biển bụi bặm ghi: "Tặng một người bạn cho muôn đời. Cầu cho cái chết khước từ ngươi chừng nào lá bùa này còn tồn tại."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Lấy số token item hình ngũ giác (lon Paint) bằng số anh hùng + 2. Để riêng số token Knowledge Roll hình tam giác bằng số anh hùng.\nĐặt các token Paint vào các phòng sau, mỗi phòng một cái: Attic, Abandoned Room, Collapsed Room, Patio, Statuary Corridor, Storeroom, Wine Cellar. Nếu nhiều phòng hơn token, đặt vào các phòng xa nhất so với bất kỳ nhà thám hiểm nào. Nếu nhiều token hơn số phòng phù hợp, để riêng số dư; đặt một token Paint vào mỗi phòng đủ điều kiện khi nó được khám phá.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội được bảo vệ bởi một bức chân dung huyền bí hấp thụ mọi bệnh tật và thương tích, và đang cố bảo vệ nó bằng mọi giá.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn phá vỡ bùa chú của bức chân dung bằng cách vẽ lại nó, hoặc kẻ phản bội chết.',
      },
      {
        heading: 'Cách Vẽ Lại Bức Chân Dung',
        body: 'Token Paint có thể được nhặt lên, đặt xuống, trao đổi, và trộm như item nhưng không thể được mang bởi Dog; chỉ mang một cái một lúc.\nTrong Gallery với một token Paint, thử Knowledge 4+ trong lượt của bạn để vẽ lại bức chân dung. Nếu thành công bỏ token Paint và đặt 1 token Knowledge Roll vào phòng (một lần mỗi lượt).\nKhi Gallery có số token Knowledge Roll bằng số anh hùng lúc đầu haunt, bùa chú bị phá vỡ.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Kẻ phản bội không thể bị làm hại bằng cách thông thường. Nếu bạn đánh bại kẻ phản bội trong cận chiến vật chất với chênh lệch 2 trở lên, bạn có thể trộm một item.\nNgoại lệ: khi một anh hùng đang đeo Amulet of the Ages đánh bại kẻ phản bội trong cận chiến, các trait của kẻ phản bội nhận sát thương như bình thường.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Khi bạn vẽ nét cuối cùng, bức tranh chịu thua và buông bỏ sức mạnh của nó. Người bạn đồng hành của bạn loạng choạng, tóc mọc dài và bạc trắng, thân xác tan rã thành cát bụi. Nhưng khi nhìn vào bức chân dung mới, bạn tự hỏi... mình đã thấy khuôn mặt đó ở đâu rồi nhỉ?',
      },
    ],
    monsters: [],
  },

  20: {
    id: 20,
    title: 'Cô Dâu Ma',
    intro:
      'Một bóng ma trong tấm ren trắng hiện ra lung linh. "Ngươi đã bỏ ta cô đơn suốt bao năm tháng dài đằng đẵng, nhưng ta đã chờ. Vì ngươi. Vì đám cưới của chúng ta." Bóng ma lướt về phía một trong các nhà thám hiểm của bạn: "Một khi ngươi chết như ta, chúng ta sẽ ở bên nhau... mãi mãi." Một tiếng đàn organ văng vẳng chơi khúc nhạc cưới khắp ngôi nhà.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu Crypt không có trong nhà, lục tìm trong chồng phòng và đặt nó vào tầng hầm, rồi xáo lại.\nĐặt một token item hình ngũ giác vào Crypt để đại diện cho the Corpse.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Ghost Bride nghĩ rằng một trong các nhà thám hiểm là chú rể mới của mình.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tìm được nhẫn cưới (lá Ring) và thi thể của chú rể thật (token Corpse), rồi trình chúng cho Ghost Bride trong Chapel trước khi cô ta cưới được bạn của bạn.',
      },
      {
        heading: 'Cách Ngăn Đám Cưới',
        body: 'Làm theo các bước này theo thứ tự; mỗi anh hùng chỉ được thử một bước mỗi lượt.\n1. Knowledge 5+ trong Bedroom, Dining Room, hoặc Library, hoặc đang mang Book (nhật ký của cô ta), để tìm ra tên của chú rể thật.\n2. Knowledge 4+ trong Crypt để định vị thi thể.\n3. Might 4+ trong Crypt để khai quật nó.\n4. Mang token Corpse đến Chapel; nó nặng, nên bước vào một phòng tốn 2 ô di chuyển (có thể trao đổi như một item).\n5. Mang Ring đến Chapel (thứ tự không quan trọng).\nVới Corpse và Ring trong Chapel, Ghost Bride xuất hiện ở đó và an nghỉ trong yên bình.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Ghost Bride tấn công bằng Sanity. Cô ta không thể bị làm hại hay làm choáng bằng bất kỳ cách nào ngoại trừ đòn tấn công Sanity từ Ring.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn nhấc cái xác ướp khô qua ngưỡng cửa nhà nguyện, chiếc nhẫn được ép vào ngón tay nó. Bóng ma trong sắc trắng hiện ra; từ cái hình hài tan vỡ trỗi lên một bóng ma trong sắc đen. Nắm tay nhau, hai bóng ma từ từ, đầy yêu thương, tan biến khỏi sự tồn tại.',
      },
    ],
    monsters: [],
  },

  21: {
    id: 21,
    title: 'Ngôi Nhà Của Xác Sống',
    intro:
      'Tiếng ầm ầm đó nghe như thứ gì đang trồi lên qua sàn nhà. Những thi thể đang phân hủy, răng đen sì mục nát, hơi thở mộ địa! Những cái xác đầy mủ chụp lấy bạn bằng những cánh tay gầy guộc như chết. Chúng sắp ngấu nghiến thịt da bạn—và bạn sẽ không chết. Đói khát vĩnh viễn, cái xác bị xé nát của bạn sẽ gia nhập đám bất tử. Bằng cách nào đó bạn phải chặn chúng lại!',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Chúng là những Zombie chậm chạp nhưng dai sức muốn giết tất cả các bạn. Một Zombie Lord cổ đại điều khiển chúng.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tiêu diệt hoặc Zombie Lord hoặc tất cả các Zombie.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu bạn bị giết, bạn trở thành Zombie vào lượt tiếp theo của bạn; kẻ phản bội cho bạn biết các trait mới (đọc haunt này trong Traitor\'s Tome).\nTiêu diệt một Zombie bằng cách đánh bại nó với bất kỳ vũ khí tấn công Might nào; Dynamite cũng giết được Zombie. Nếu không, đánh bại một Zombie chỉ làm nó choáng.\nKhi bạn được phép rút một lá item, bạn có thể rút ba lá thay vào đó, chọn một, và đặt các lá còn lại xuống đáy.\nKhi đang mang Holy Symbol, các Zombie tấn công Might vào bạn sẽ đổ ít hơn 2 xúc xắc. (Không có tác dụng với Zombie Lord.)\nBạn chỉ có thể gây sát thương cho Zombie Lord khi đang mang Medallion. Người giữ Medallion không cần vũ khí để gây sát thương cho nó, nhưng vũ khí cầm tay gây sát thương cho nó bình thường. Kẻ phản bội theo dõi sát thương và thông báo khi nó bị tiêu diệt. Các anh hùng không có Medallion thậm chí không thể làm choáng Zombie Lord.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Tiếng thịt da bị xé toạc bởi những bàn tay xám ngoét như xác chết, tiếng nhai gặm kinh tởm theo sau—bạn vẫn còn nghe được. Mỗi lần như thế, bạn gần như tưởng tượng có thứ gì đó dịch chuyển trong tường. Rồi bạn trở mình và ngủ tiếp. Đi kiểm tra nguồn gốc của những âm thanh đó chẳng bao giờ dẫn đến điều gì tốt đẹp cả.',
      },
    ],
    monsters: [],
  },

  22: {
    id: 22,
    title: 'Vực Thẳm Nhìn Lại',
    intro:
      'Ngôi nhà rung chuyển và rên rỉ; một làn sóng nhiệt bao trùm lấy bạn. Một phần ngôi nhà vỡ vụn và rơi xuống một hồ lửa đang cháy. Bạn vội vã trèo đến nơi an toàn, tự hỏi làm sao để ngăn ngôi nhà sụp xuống Địa Ngục và kéo theo bạn cùng xuống.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng số token Sanity Roll hình tam giác bằng số người chơi. Để riêng số token Knowledge Roll hình tam giác bằng số đó.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội chào đón Vực Thẳm—và muốn chắc chắn rằng mọi người khác cũng đi cùng chuyến.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn thực hiện thành công một lễ trừ tà để ngăn ngôi nhà sụp đổ.',
      },
      {
        heading: 'Cách Thực Hiện Lễ Trừ Tà',
        body: 'Lễ trừ tà cần số lần đổ trừ tà thành công bằng số người chơi. Chỉ một lần mỗi lượt.\nSanity 5+ trong Chapel, Crypt, hoặc Pentagram Chamber, hoặc đang mang Holy Symbol hoặc Ring.\nKnowledge 5+ trong Library hoặc Research Laboratory, hoặc đang mang Book hoặc Crystal Ball.\nMỗi lần thành công đặt token trait tương ứng lên ô phòng hoặc thẻ item đã dùng; một token vẫn được tính ngay cả khi phòng/item đó về sau bị phá hủy. Một khi đã dùng, một item hoặc phòng không thể được dùng lại. Khi số token đặt được bằng số người chơi, ngôi nhà ngừng sụp đổ.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Vào cuối lượt của bạn, kẻ phản bội bảo bạn lật úp một hoặc nhiều ô phòng; những ô này đã sụp đổ và giờ là một phần của Vực Thẳm.',
      },
      {
        heading: 'Đối Phó Với Vực Thẳm',
        body: 'Kẻ phản bội theo dõi thời gian trên thanh Lượt/Sát thương.\nNếu bạn mang Holy Symbol và đang kề bên (có cửa thông) một phòng đã bị phá hủy, bạn có thể hy sinh nó thay vì lật úp các ô; bỏ nó và đừng lật các ô đó, ngăn sự sụp đổ cho đến cuối lượt tiếp theo của bạn (thanh vẫn tiến lên).\nNếu Vực Thẳm nuốt chửng phòng của bạn, thử Speed 4+ để nhảy sang một phòng kề bên đã khám phá, không sụp đổ, có cửa thông; thất bại (hoặc không có phòng nào khả dụng) và bạn bị hút vào và bị giết.\nNếu một event hoặc Mystic Elevator đưa bạn đến một phòng hoặc tầng đã sụp đổ, bạn rơi tõm xuống Vực Thẳm và chết.\nEntrance Hall, Foyer, và Grand Staircase mỗi cái tính là một phòng riêng (đánh dấu mỗi cái bằng một token item khi bị mất).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Câu thần chú cuối cùng đã kết thúc. Ngôi nhà ngừng ầm ầm, làn sương xám rút lui, ánh đỏ rực tắt lịm. Bạn thở phào. Hôm nay Địa Ngục sẽ không đòi được bạn.',
      },
    ],
    monsters: [],
  },

  23: {
    id: 23,
    title: 'Nỗi Kinh Hoàng Xúc Tu',
    intro:
      'Những dải mô cơ bắp uốn éo hiện ra, những giác bám sần sùi viền sừng đập phập phồng và lách cách. Một dải da cao su lướt qua chân một nhà thám hiểm đồng hành, siết chặt, và lôi anh ta khuất tầm nhìn. Tiếng hét của anh ta nhỏ dần, rồi tắt hẳn. Rồi cái xúc tu quay trở lại.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng 3 token Might Roll hình tam giác.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Một Tentacled Horror đang tìm kiếm bạn. Mỗi Tentacle là một token Arm cộng một token Sucker. Nếu một Sucker kéo bạn về Arm tương ứng của nó, bạn sẽ bị giết vào đầu lượt quái vật tiếp theo trừ khi được giải cứu. Các Tentacle ngày càng mạnh hơn theo thời gian.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tiêu diệt sinh vật.',
      },
      {
        heading: 'Cách Tiêu Diệt Sinh Vật',
        body: 'Tìm và tiêu diệt Head.\nAnh hùng có Crystal Ball dùng nó để tìm Head: Knowledge 4+ (một lần đổ không thành công kích hoạt hậu quả tiêu cực của lá bài). Nếu thành công, thay vì rút một lá, đổ 4 xúc xắc cho vị trí của Head: 0 Larder; 1 Kitchen; 2 Organ Room; 3 Chasm; 4–5 Underground Lake; 6 Conservatory; 7 Crypt; 8 Furnace Room.\nCrystal Ball vỡ tan sau lần dùng này (bỏ lá bài).\nNếu phòng đó chưa được khám phá, tìm nó trong chồng phòng, đưa cho kẻ phản bội để nối vào bất kỳ ô cửa chưa khám phá nào trên tầng phù hợp, rồi xáo lại.\nĐặt một token quái vật nhỏ ở đó cho Head.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Arm không thể tấn công hay bị tấn công. Sucker tấn công và bị tấn công bình thường.\nNếu một Sucker đánh bại bạn trong cận chiến vật chất, không có sát thương—bạn bị tóm và rơi hết item ở đó; Sucker kết thúc di chuyển của nó.\nĐánh bại một Sucker làm nó choáng; nó thả anh hùng đang bị tóm và token Sucker trở về phòng của Arm tương ứng.\nArm không làm chậm di chuyển; Sucker thì có.\nHead có thể tấn công các anh hùng. Mỗi lần Head lẽ ra nhận sát thương, thay vào đó đặt một token Might Roll vào phòng của nó; khi cả 3 cái được đặt, Head bị tiêu diệt.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nếu bạn bị tóm, bạn không thể dùng item nhưng vẫn có thể tấn công Sucker đang tóm bạn. Đánh bại nó để được thả ra và giải thoát, nhưng mỗi phòng bạn bước vào trong phần còn lại của lượt tốn 2 ô. Hòa hoặc thua: không có sát thương, nhưng lượt của bạn kết thúc.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Cái xúc tu viền giác đập quằn quại trong đau đớn, kéo sập cả trần và tường. Một tiếng hét vọng lên vượt quá ngưỡng nghe của bạn khi tiếng gọi cuối cùng của sinh vật xuyên qua những chiều không gian bạn không thể tưởng tượng nổi. Cuối cùng, Cái Thứ Không Nên Tồn Tại đã không còn—cho đến khi bạn gặp lại nó trong những giấc mơ.',
      },
    ],
    monsters: [],
  },

  24: {
    id: 24,
    title: 'Bay Về Nhà',
    intro:
      'Bạn nghe một âm thanh sột soạt như giấy nhám bên ngoài. Qua cửa sổ bạn thấy một bầy dơi khổng lồ với đôi mắt đỏ rực. Bạn kéo rèm lại, nhưng rồi bạn nghe thấy nó: một tiếng thịch, rồi một tiếng nữa, một tiếng cười nghẹn ghê rợn. Sột, soạt, sột. Chúng đến rồi.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu Organ Room không có trong nhà, lục tìm trong chồng phòng và đặt nó vào nhà, rồi xáo lại.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã thả những con Bat hút máu vào nhà. Đám Bat đã giết kẻ phản bội; giờ chúng muốn giết bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn xua đuổi đám Bat bằng cách tạo ra những âm thanh thích hợp bằng đàn organ ống (trong Organ Room), rồi giết bất kỳ con Bat nào bám vào các nhà thám hiểm.',
      },
      {
        heading: 'Cách Xua Đuổi Bat',
        body: 'Làm theo các bước này theo thứ tự; mỗi anh hùng chỉ được thử một bước mỗi lượt.\n1. Trong Organ Room, Might 5+ để khởi động đàn organ ống.\n2. Sau khi nó đã khởi động, Knowledge 6+ trong Organ Room để tạo ra những âm thanh xua đuổi tất cả Bat chưa bám và ngăn thêm con khác vào. (Một anh hùng có sở thích là Music có thể dùng Knowledge 5+ thay vào đó.)\n3. Tấn công và giết bất kỳ con Bat nào đang bám vào các anh hùng.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Vào đầu lượt của bạn, nhận 1 sát thương vật chất cho mỗi con Bat đang bám vào bạn. Mặc Armor giảm tổng đi 1.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Tấn công một con Bat đang bám vào bạn hoặc một anh hùng khác bằng Might; đánh bại nó giết nó thay vì làm choáng.\nBat chưa bám không ảnh hưởng đến di chuyển, nhưng bạn di chuyển ít hơn 1 ô cho mỗi con Bat đang bám (tối thiểu 1).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Con dơi căng phồng cuối cùng rũ xuống sàn, và căn phòng sáng dần lên. Bạn thấy ánh sáng mờ nhạt của bình minh ở phía đông. Tiếng sột soạt nhỏ dần thành im lặng. Bạn run lên nhẹ nhõm, biết rằng mình sẽ không phải ở lại đây thêm một đêm nào nữa.',
      },
    ],
    monsters: [],
  },

  25: {
    id: 25,
    title: 'Bùa Ngải',
    intro:
      'Bạn mở một cuốn nhật ký và thấy mỗi trang dán một tấm ảnh của một con búp bê bùa ngải, mỗi con bị bôi xóa bằng một vạch đỏ lớn—trừ vài con cuối. Một con trông giống một trong những người bạn của bạn. Và con này thì hơi giống bạn...',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã giấu những con búp bê bùa ngải khắp ngôi nhà, mỗi con liên kết với một anh hùng và đặt ở một nơi nguy hiểm. Khi thanh Lượt/Sát thương tiến lên, tác động của các con búp bê càng tệ hơn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn phá hủy tất cả các con búp bê và ít nhất một nửa (làm tròn lên) số anh hùng bắt đầu haunt vẫn còn sống.',
      },
      {
        heading: 'Cách Phá Hủy Búp Bê',
        body: 'Đi theo những gợi ý của kẻ phản bội đến các phòng có búp bê (bạn có thể yêu cầu kẻ phản bội nhắc lại bất kỳ gợi ý nào).\nTrong haunt này, các nhà thám hiểm không dừng lại khi bước vào một phòng có biểu tượng chưa khám phá trước đó. Bạn có thể khám phá bao nhiêu phòng tùy thích, chỉ rút một lá nếu bạn kết thúc di chuyển trong một phòng có biểu tượng (hoặc tìm búp bê trong một phòng có biểu tượng vừa được khám phá).\nDi chuyển đến một phòng bạn nghĩ có búp bê. Thử Knowledge 2+ để tìm kiếm; nếu thành công, hỏi kẻ phản bội xem phòng có chứa búp bê không—họ phải trả lời thành thật và nêu rõ là con nào. Bạn chỉ có thể tìm kiếm một phòng mỗi lượt.\nMột khi bạn tìm thấy một con búp bê, bạn có thể tự động phá hủy nó nếu đó là của bạn; bạn có thể tìm bất kỳ con búp bê nào nhưng chỉ phá hủy được của riêng mình.\nNếu một anh hùng chết, con búp bê của anh hùng đó cũng bị phá hủy.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn đập con búp bê xuống sàn, hết lần này đến lần khác—mắt cúc vỡ tan, chỉ khâu bục ra, lớp vải rách toạc. Con búp bê bị phá hủy. Khoan—đó không phải là việc khôn ngoan nhất để làm với một con búp bê bùa ngải. Bạn thấy không khỏe... nhưng lẽ ra mọi chuyện đã có thể tệ hơn nhiều.',
      },
    ],
    monsters: [],
  },
};
