import type { HauntStory } from '../../types';

export const TT_VI_4: Record<number, HauntStory> = {
  77: {
    id: 77,
    title: "They're Always After Me",
    intro:
      'Bạn mở một hộp ngũ cốc và bị bao trùm bởi những luồng ánh sáng rực rỡ — cầu vồng, mặt trăng, móng ngựa. Khi chúng tan đi, người bạn của bạn đã thành một gã lùn méo mó. "Ngươi đừng hòng lấy được hũ vàng của ta!" Leprechaun cười khành khạch rồi co giò chạy.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Tăng Speed của bạn lên giá trị cao nhất. Xáo lá Medallion (Lucky Charm của bạn) vào chồng omen. Hãy giả một giọng Ireland tệ đến lạnh sống lưng trong suốt phần còn lại của ván.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang tìm Pot of Gold của bạn ở cuối một Rainbow ẩn giấu. Đừng để họ lấy được Lucky Charm của bạn, kẻo họ sẽ tìm ra Rainbow.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết.',
      },
      {
        heading: 'Luật Thứ Tự Lượt Đặc Biệt',
        body: 'Bạn đi một lượt sau khi mỗi anh hùng đi xong lượt của họ. Bạn nhanh nhẹn lắm.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nếu bạn kết thúc lượt trong một phòng có biểu tượng omen, nhìn lá omen trên cùng rồi đặt nó lại. Nếu sau đó bạn đổ Knowledge 4+ thành công, bạn có thể xáo chồng bài.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể tấn công bằng Might trừ khi đang ở trên Rainbow. Ở nơi khác, hãy tấn công Speed với số xúc xắc bằng Speed của bạn hoặc số mảnh phòng bạn đã vào trên tầng này trước khi tấn công, lấy số nhỏ hơn. Bạn không thể tấn công bất kỳ ai trong phòng bạn bắt đầu (trừ khi ở trên Rainbow), cũng không thể vào lại phòng bạn đã rời khỏi trong lượt này. Nếu bị đánh bại khi tấn công hay phòng thủ, hãy kêu lên "Dear boy, release me!" và anh hùng sẽ cho bạn biết chuyện gì xảy ra.',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Nếu bạn sắp rút một lá Item, bạn có thể rút một lá Omen thay vào đó. Nếu bạn rút được Medallion, đặt bảy Colors of the Rainbow trải ra từ một cửa mái đang mở (đỏ, cam, vàng, lục, lam, tím, đỏ tía), rồi đặt Pot of Gold ở cuối.',
      },
      {
        heading: 'Rainbow',
        body: 'Mỗi Color of the Rainbow là 1 ô di chuyển. Nếu bạn dừng trên một Color có anh hùng, hoặc một anh hùng kết thúc trên Color của bạn, bạn có thể tấn công Might để đẩy họ xuống; nếu thành công họ rơi xuống chết.',
      },
    ],
    monsters: [],
  },

  78: {
    id: 78,
    title: "The Devil's Name",
    intro:
      'Bạn nhấc một phiến đá đậy lên, và một cái tên chực chờ nuốt chửng cố ép mình vào tâm trí bạn. Bạn là con Quỷ (Fiend). Brimstone Square nắm giữ bí mật tên thật của bạn — thứ duy nhất có thể đẩy bạn trở lại ngục tù.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Nhận 5 Knowledge. Đặt sáu token item hình ngũ giác 1–6 (Tomes of Lore) vào các phòng khác nhau; ít nhất một cái trên mỗi tầng, và chỉ một cái trên tầng hiện tại của bạn. Nếu bạn có lá Chalk, đưa nó cho một anh hùng. Chọn một số 1–20 để có một cái tên 5 chữ cái trên bảng Tên Của Con Quỷ; ghi lại nó một cách bí mật.',
      },
      {
        heading: 'Cách Tên Thật Của Bạn Hoạt Động',
        body: 'Mỗi Tome of Lore có thể tiết lộ một chữ cái trong tên thật của bạn (sau khi một anh hùng dùng hết di chuyển và nghiên cứu nó thành công; mỗi lần xuất hiện của một chữ cái là một chữ cái khác nhau). Nếu một anh hùng trong phòng bạn nói đúng tên thật của bạn, bạn bị trục xuất và họ thắng. Nếu họ nói sai tên, bạn nhập vào anh hùng đó. Một anh hùng cũng có thể nói một cái tên với một anh hùng bị nhập: đúng thì chấm dứt việc bị nhập (không thể bị nhập lại); sai thì gây sát thương tinh thần bằng số chữ cái chưa đoán.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Tấn công Knowledge nhằm vào một anh hùng trong phòng bạn. Nếu bạn hạ một chỉ số của anh hùng xuống biểu tượng đầu lâu (ngưỡng tử), một phần linh hồn của bạn nhập vào họ (đặt lại chỉ số, trở thành kẻ phản bội). Nếu bất kỳ chỉ số nào của bạn sắp tụt xuống biểu tượng đầu lâu (ngưỡng tử), thay vào đó hạ nó về giá trị thấp nhất phía trên.',
      },
      {
        heading: 'Luật Vật Phẩm Đặc Biệt',
        body: 'Bạn không thể nhặt Tomes of Lore hay lá Chalk; các anh hùng bị nhập thì làm được cả hai.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều bị nhập hoặc đã chết.',
      },
      {
        heading: 'Tên Của Con Quỷ',
        body: 'Đổ/chọn 1–20 để có một cái tên 5 chữ cái: 1 BALAM, 2 MATIR, 3 LILIM, 4 ORMIS, 5 VOTHR, 6 LOLTH, 7 BOTIS, 8 MIMUM, 9 VECUR, 10 ORPAK, 11 MECUH, 12 BAPHM, 13 VICTH, 14 ORCUS, 15 LETHK, 16 OICAK, 17 BELTH, 18 MOLAK, 19 LAMAS, 20 VEPAR.',
      },
    ],
    monsters: [],
  },

  79: {
    id: 79,
    title: 'The Twins',
    intro:
      'Một sợi dây đỏ bùng lên giữa hai người bạn của bạn, trói chặt họ — một chiếc roi đen lốm đốm những vì sao li ti. Họ là hai cực của một thanh nam châm, khoảng không gian giữa họ nổ lách tách bởi sức mạnh.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Các nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành cặp Twin kẻ phản bội. Với mỗi chỉ số, bạn có thể hạ chỉ số của một Twin để tăng chỉ số kia lên cùng một lượng. Để sang một bên các token Obstacle (Nodes) bằng sáu trừ đi số anh hùng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố ngăn bạn tạo ra một Seam — một sóng năng lượng trải dài giữa bạn và Twin của bạn khi hai người cách nhau đủ xa.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn lấy ra hết các Node và có thể vạch một đường đi giữa bạn và Twin của bạn, đường này chạm vào tất cả các Node và bao gồm ít nhất hai mươi phòng.',
      },
      {
        heading: 'Cách Dệt Đường May (Seam)',
        body: 'Trong lượt của bạn, thả một Node (giống như làm rơi một item) lên một cửa ra vào hoặc lối đi khác giữa các phòng hoặc các tầng; lối đó không thể bị bất kỳ ai di chuyển hay nhìn xuyên qua nữa, kể cả bạn. Nếu tất cả Node đã được đặt, gỡ một cái ra trước khi thả cái mới. Bạn không được đặt Node vào phòng đã có sẵn một cái, cũng không được đặt cái nào làm cô lập các phòng khỏi phần còn lại của căn nhà. Nếu bạn không di chuyển trong một lượt mà bạn bắt đầu trong phòng có Node, bạn có thể chạm vào Node để nâng một chỉ số về giá trị khởi đầu của nó.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu bạn nhận sát thương, bạn có thể chia nó giữa bạn và Twin của bạn, miễn là cả hai đều mất ít nhất 1 điểm ở một chỉ số.',
      },
    ],
    monsters: [],
  },

  80: {
    id: 80,
    title: 'I, Mutant',
    intro:
      'Bạn tỉnh dậy trên sàn nhà nhiều giờ sau đó, da bạn nhuốm một sắc xanh tím nhạt kỳ lạ. Những người tử tế ở Humane Research Supplies đã giao một lô khỉ mới cho các thí nghiệm của bạn... và lũ khỉ đã sổng khỏi chuồng.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Gọi các anh hùng là "Monkeys" trong suốt phần còn lại của ván. Nếu Research Laboratory chưa có trong ván, tìm nó trong chồng phòng, đặt vào và xáo lại. Với mỗi Monkey, đặt một token quái vật hình tròn (Assistant) khác màu vào Research Laboratory. Đặt các token Obstacle (Electronets) bằng số nhà thám hiểm vào các phòng khác nhau.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn bắt được tất cả các Monkey của mình.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Bạn có thể đặt một Electronet vào một phòng bạn đã chiếm trong lượt này; mỗi Assistant có thể làm điều tương tự trong lượt quái vật.',
      },
      {
        heading: 'Cách Bắt Một Monkey',
        body: 'Khi một Monkey vào phòng có Electronet, họ phải đổ Might, Speed, hoặc Knowledge 5+ cho mỗi Electronet ở đó. Bất kỳ lần đổ thất bại nào cũng khiến Monkey bị bắt (lật ngã quân của họ); mỗi lần thành công gỡ bỏ một Electronet.',
      },
      {
        heading: 'Assistants',
        body: 'Assistants di chuyển hết Speed của chúng (không đổ xúc xắc) và có thể di chuyển các Monkey đã bị bắt (tốn 2 ô di chuyển). Một Assistant bị đánh bại sẽ bị choáng; khi hết choáng, thay nó bằng một màu khác. Đỏ (3/5/2/2): có thể di chuyển một Monkey bị đánh bại sang phòng kề bên. Cam (5/3/2/2): đi xuyên qua cửa giả. Vàng (2/2/2/5): tấn công/phòng thủ bằng Knowledge — khi thành công, đặt một Electronet và bắt thay vì gây sát thương. Lục (1/3/5/3): có thể dịch chuyển tức thời thay vì di chuyển. Lam (3/4/2/3): khi bị đánh bại trong một đợt tấn công, Monkey nhận phần dư làm sát thương. Tím (3/4/2/3): +2 xúc xắc tấn công và trộm một item thay vì gây sát thương (bạn nhận được nó). Đỏ tía (3/4/4/1): không thể bị choáng.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn lỡ tay khiến lũ Monkey không thể bị giết. Nếu bạn sắp giết một Monkey, bất kỳ chỉ số nào sắp tụt xuống biểu tượng đầu lâu (ngưỡng tử) sẽ tụt về giá trị thấp nhất phía trên, và Monkey bị bắt thay vào đó (đặt một Electronet vào phòng của nó).',
      },
    ],
    monsters: [],
  },

  81: {
    id: 81,
    title: 'The Canopic Curse',
    intro:
      'Bạn đã tìm ra chiếc bình canopic chứa đựng sức mạnh của Khasekhemui khi pharaoh băng hà. Nhưng ngay cả bạn cũng không biết chiếc bình nào trong căn nhà này chứa tinh túy ấy. Bạn sẽ phải gom hết chúng trước khi những người khác kịp nhận ra.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Trước khi rời phòng, gom các token Obstacle (Curses) 1–6 và mang chúng theo, úp xuống và xáo trộn ngẫu nhiên. Gọi từng anh hùng ra riêng để nhận một Curse. Mang các token Curse trở lại. Đặt token Mummy hình tròn lớn vào Pentagram Chamber; đặt một Curse ngẫu nhiên úp xuống bên dưới nó, và phần còn lại vào hộp.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn mang đúng chiếc Jar tới Pentagram Chamber, hợp nhất Mummy với tinh túy của hắn.',
      },
      {
        heading: 'Cách Gán Curse Và Tư Cách Phản Bội',
        body: 'Gán ngẫu nhiên cho mỗi anh hùng một Curse (không có hai cái giống nhau; Curse 2 và 5 tính là cùng một loại ở bước này). Curse 2 hoặc 5 biến anh hùng đó thành kẻ phản bội bí mật — họ đọc trang này, giả vờ mang một Curse khác, và hành động theo Curse đó cho đến khi họ lộ ra trò lừa (việc này phải xảy ra khi chiếc Jar cuối cùng được nhặt lên).',
      },
      {
        heading: 'Cách Lấy Một Jar',
        body: 'Lấy một Jar từ một phòng vào cuối lượt của bạn (bạn không thể di chuyển sau đó, nhưng có thể đưa nó đi). Mỗi lượt chỉ một Jar; bạn có thể làm rơi một Jar bất cứ lúc nào nhưng không thể nhặt lại nó trong cùng lượt đó.',
      },
      {
        heading: 'Cách Biết Ai Có Jar Đúng',
        body: 'Khi cả sáu Jar đã được gom đủ, tiết lộ Curse bên dưới Mummy; nhà thám hiểm có token Jar khớp với nó đang cầm Jar đúng, và đến lượt người đó. Nếu là kẻ phản bội, họ tiến tới Pentagram Chamber. Các nhà thám hiểm không được tấn công người cầm Jar cho đến khi Jar đúng được tiết lộ; sau đó, người cầm bị làm tổn thương phải đổ Might 4+ để giữ Jar.',
      },
      {
        heading: 'Curses',
        body: '1 Bạn không thể nhặt một Jar mang số chẵn. 2 Bạn cũng là kẻ phản bội (mang Jar đúng tới Pentagram Chamber). 3 Trừ khi bạn kết thúc lượt trong phòng có item hoặc omen, nhận 1 xúc xắc sát thương tinh thần. 4 Bạn không thể nhặt Jar từ tầng mà bạn đang ở khi bị nguyền. 5 Bạn cũng là kẻ phản bội (như Curse 2). 6 Bạn chỉ có thể nhặt Jar mang số cao nhất hiện không có ai cầm.',
      },
    ],
    monsters: [],
  },

  82: {
    id: 82,
    title: 'Get a Clue',
    intro:
      'Một tiếng thét vang vọng khắp căn nhà — chủ nhà đã được phát hiện đã chết. Chẳng cần phá án này làm gì: tên quản gia là thủ phạm! Câu hỏi duy nhất là làm sao thoát ra trước khi bạn trở thành nạn nhân tiếp theo của hắn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Nhận 2 Might. Đặt thanh Lượt/Sát thương về bằng số anh hùng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Các anh hùng biết bạn là kẻ giết người và sẵn sàng báo cảnh sát; họ sẽ cần bằng chứng ngoại phạm.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết, hoặc lá Rope bị làm rơi trong Dining Room và cảnh sát đến trước khi những người còn sống có được bằng chứng ngoại phạm.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Vào đầu lượt của bạn, tăng thanh Lượt/Sát thương. Khi nó đạt 12, cảnh sát đến.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu bất kỳ chỉ số nào của bạn sắp tụt xuống biểu tượng đầu lâu (ngưỡng tử), hạ nó về giá trị thấp nhất phía trên. Trong phòng có bằng chứng ngoại phạm của một anh hùng, bạn không thể làm tổn thương hay trộm đồ của họ.',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Bạn không được nhặt lá Item, token Item, hay lá Omen — nhưng bạn có thể trộm vũ khí và lá Rope từ các anh hùng bằng các đợt tấn công vật chất.',
      },
    ],
    monsters: [],
  },

  83: {
    id: 83,
    title: 'In the Details',
    intro:
      'Kịch bản này không có kẻ phản bội — chỉ có các anh hùng. Tất cả các bạn đang cố trở thành người thoát khỏi hợp đồng. Phần luật còn lại nằm trong Secrets of Survival.',
    sections: [
      {
        heading: 'Nơi Tìm Luật',
        body: 'Kịch bản này không có kẻ phản bội; toàn bộ luật nằm trong cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  84: {
    id: 84,
    title: 'Forget to Remember',
    intro:
      'Các bức chân dung đều khắc họa Richard Smith — một kẻ giết người mà thị trấn này không bao giờ quên. Người bạn của bạn nhìn bạn chằm chằm hệt như các bức chân dung, và căn nhà kẽo kẹt rền rĩ. Tâm trí của tên giết người hàng loạt quá mạnh để bất kỳ bộ não nào chứa nổi, và hắn đang mưu tính bên trong tâm trí bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Nếu Sanity và/hoặc Knowledge của bạn dưới giá trị khởi đầu, nâng chúng về giá trị khởi đầu. Bí mật đổ 1 xúc xắc cho mỗi anh hùng và cộng các kết quả lại. Yêu cầu mỗi anh hùng đổ 1 xúc xắc. Nếu tổng của họ nhỏ hơn lần đổ của bạn, bạn bất trung và Richard Smith ngự trị trong bạn. Nếu tổng bằng hoặc lớn hơn lần đổ của bạn, bạn trung thành — nhưng vẫn tính là kẻ phản bội và có thể dùng các quyền năng phản bội.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Nếu bất trung, khi tất cả anh hùng đã chết hoặc là quái vật phục vụ Psychic Spirit. Nếu trung thành, bạn và các anh hùng còn sống thắng khi Knowledge của mỗi anh hùng còn sống bị hạ về giá trị thấp nhất hoặc biểu tượng đầu lâu (ngưỡng tử), sau đó các anh hùng phá hủy Crystal Ball và bạn hạ Knowledge của mình về 1 để quên Richard Smith.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Quái Vật',
        body: 'Dù bạn trung thành hay không, hãy thực hiện các đợt tấn công tinh thần của Psychic Spirit nhằm vào các anh hùng (người cầm Crystal Ball, nếu không thì anh hùng có Knowledge cao nhất). Khi thua, sát thương được chia đều giữa Sanity và Knowledge (phần dư theo ý anh hùng). Psychic Spirit không bao giờ tấn công bạn.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn có thể tấn công tinh thần bằng Knowledge hoặc Sanity nhằm vào bất kỳ nhà thám hiểm nào trong phòng bạn (mục tiêu tự quyết cách áp dụng sát thương, nên hãy thuyết phục họ). Psychic Spirit không bao giờ nhận sát thương tinh thần. Nếu bạn trung thành, hãy thuyết phục các anh hùng dồn sức vào Crystal Ball. Nếu bạn trung thành và một anh hùng giết bạn, họ thấy được sự vô tội của bạn và mất 2 Sanity.',
      },
    ],
    monsters: [{ name: 'Psychic Spirit of Richard Smith', stats: 'Sanity 6 · Knowledge 6' }],
  },

  85: {
    id: 85,
    title: 'The Murderer in the Machine',
    intro:
      'Điện thoại của bạn rung lên với một thông báo Flitter — một bức ảnh người bạn thân nhất của bạn, bị sát hại dã man. Rồi một bức nữa. Và một bức nữa. Đây là cách tuyệt vời để dọn sạch danh sách bạn bè của bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Bỏ lá Ring. Lấy một token item hình ngũ giác (một Smartphone). Gỡ kẹp Sanity khỏi lá nhân vật của bạn — bạn không còn giá trị Sanity nữa (bạn không thể bị tấn công bằng Sanity, mất Sanity, hay đổ Sanity). Đặt thanh Lượt/Sát thương về 1.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Mọi anh hùng đều đã phát điên và gia nhập phe bạn, hoặc đã bị giết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Vào đầu lượt của bạn, tăng thanh Lượt/Sát thương. Chỉ làm điều này khi đến lượt của nhân vật phản bội của bạn (kể cả khi đã chết), và không làm trong lượt của các cựu anh hùng đã gia nhập phe bạn.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn có thể Share các vụ giết người qua mạng xã hội bất cứ lúc nào trong lượt phản bội của bạn (kể cả khi đã chết). Mỗi lượt một lần, với mỗi Smartphone (kể cả những cái bị làm rơi): chọn một anh hùng; nếu chưa có sóng, bảo họ đi tìm sóng (dừng lại nếu phòng có Dead Zone hoặc nằm trong tầng hầm); cho họ biết về những bức ảnh ghê rợn của các bạn Flitter bị sát hại; rồi tấn công Sanity với số xúc xắc bằng số trên thanh Lượt cộng số Bars trong phòng (tối đa 8). Anh hùng phòng thủ bằng Sanity.',
      },
      {
        heading: 'Cách Thêm Bạn Vào Mạng Lưới Của Bạn',
        body: 'Một khi Sanity của một anh hùng tụt xuống biểu tượng đầu lâu (ngưỡng tử), họ trở thành bạn của bạn (gỡ kẹp Sanity của họ; họ vẫn tiếp tục đi lượt, nhưng mục tiêu của họ là ngăn các anh hùng trốn thoát).',
      },
      {
        heading: 'Luật Smartphone Bị Làm Rơi Đặc Biệt',
        body: 'Nếu một anh hùng kết thúc lượt trong phòng không có Smartphone, bạn có thể thử đổ Knowledge 5+ để di chuyển một Smartphone bị làm rơi sang phòng của anh hùng đó.',
      },
    ],
    monsters: [],
  },

  86: {
    id: 86,
    title: 'The Woods in the Cabin',
    intro:
      'Bạn là một cái cây. Bạn đã sống ở đây cả trăm năm, vươn về phía bầu trời, rễ cắm sâu vào lòng đất. Tiếc thay lũ vượn trụi lông này lại nhầm bạn với một căn nhà.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Gỡ quân của bạn ra khỏi căn nhà — bạn giờ là Tree sống. Ghi lại số phòng đang có trong nhà. Bỏ mọi lá bài bạn mang theo (xáo bất kỳ vũ khí nào vào chồng của chúng). Đặt Tree House lên trên Foyer (di chuyển mọi thứ trong đó cùng với nó; nếu chưa có trong ván, tìm nó, đặt lên Foyer, xáo lại). Nếu có ít hơn năm phòng tầng hầm, đặt thêm các phòng tầng hầm cho đến khi có năm. Đặt một token Plant (Rootstalk) vào bốn phòng tầng hầm và một token quái vật màu lục (Roots) vào mỗi phòng tầng hầm còn lại. Đặt một token quái vật màu cam (Acorn) vào mỗi phòng tầng trên. Đặt các token quái vật màu đỏ (Squirrels) bằng số anh hùng vào phòng có token Plant nối với Tree House.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết, hoặc bạn lớn hơn mười phòng (chưa bị phá hủy) so với lúc bắt đầu haunt.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Đặt một Root vào một phòng tầng hầm không có Rootstalk. Đặt một Acorn vào một phòng tầng trên. Đặt các Squirrels bằng số anh hùng vào phòng có token Plant nối với Tree House. Khám phá một phòng qua bất kỳ cửa mở nào trong tầng hầm.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Trong lượt quái vật, các Squirrels của bạn có thể tấn công bất kỳ anh hùng nào có token nhà thám hiểm trên lá của họ (người đã tấn công bạn hoặc các Squirrels của bạn). Một anh hùng tấn công một trong các phòng của bạn coi nó như Might 4. Các Squirrels trong cùng phòng có thể gộp Might lại thành một đợt tấn công, nhưng nếu thất bại, mỗi điểm sát thương sẽ gỡ 1 Squirrel.',
      },
    ],
    monsters: [
      {
        name: 'Squirrels',
        stats: 'Speed 8 · Might 1 · Sanity 6 · Knowledge 1 (di chuyển hết Speed, không đổ xúc xắc)',
      },
    ],
  },

  87: {
    id: 87,
    title: 'Sibling Rivalry',
    intro:
      'Bộ não của bạn tự nói chuyện với chính mình bằng những giọng gần như y hệt. "Bi ve trên cầu thang! Cô ả sẽ KHÔNG bao giờ thoát khỏi cú này đâu!" Khi bạn nhận ra những giọng nói này giờ là của chính mình, cơ thể bạn tách thành hai phiên bản của bản thân. Chuyện này sẽ... vui đây.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Bạn có một Sibling ở mặt bên kia của lá nhân vật (kẹp chỉ số ở cùng vị trí). Các giá trị của bạn không thể thay đổi cho đến khi Headmistress được tìm thấy. Đặt token nhà thám hiểm của bạn (Sibling của bạn) cách quân của bạn xa nhất có thể. Đặt token Doctor hình tròn lớn (Headmistress) vào một phòng tầng hầm bất kỳ. Để sang một bên các token Obstacle (Pranks) bằng hai lần số nhà thám hiểm.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Bạn đã nhốt Headmistress trong tầng hầm; các anh hùng sẽ cố thả bà ta ra.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Các trò chơi khăm của bạn dẫn đến cái chết của tất cả anh hùng.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Luân phiên di chuyển từng Sibling. Vào đầu mỗi lượt sau lượt đầu tiên, lật lá nhân vật của bạn.',
      },
      {
        heading: 'Cách Bày Một Trò Chơi Khăm',
        body: 'Di chuyển tới một phòng bất kỳ và đổ Sanity 3+ thành công để đặt một Prank ở đó (tối đa hai lần số anh hùng cùng lúc). Khi một Prank bị kích hoạt, trả nó về chồng của bạn; sau đó bạn có thể đặt lại nó ở nơi khác.',
      },
      {
        heading: 'Kích Hoạt Pranks',
        body: 'Khi một anh hùng vào phòng có Prank, đổ 2 xúc xắc: 0 họ đổ Speed 3+ hoặc nhận 1 sát thương vật chất; 1 đổ Might 4+ hoặc nhận 1 sát thương vật chất; 2 đổ Sanity 3+ hoặc dừng di chuyển; 3 đổ Knowledge 4+ hoặc làm rơi một lá item/omen ngẫu nhiên (không thể nhặt lại trong lượt này); 4 đổ bất kỳ chỉ số nào 5+ hoặc nhận 1 sát thương tinh thần.',
      },
    ],
    monsters: [],
  },

  88: {
    id: 88,
    title: 'Cry, Babylon!',
    intro:
      '"Tất cả hãy quỳ rạp trước ta, đại đế Nebuchadnezzar hùng mạnh! Hãy chuẩn bị làm vật hiến tế cho tử thần Marduk. Đêm nay ta sẽ thoát khỏi nơi này và báo thù."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Đặt lại các chỉ số của bạn về giá trị khởi đầu, rồi tăng mỗi chỉ số thêm bằng số anh hùng.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố ngăn bạn, Nebuchadnezzar tái sinh, hiện thân hoàn toàn thành thần Babylon Marduk.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Thay vì nhận sát thương khi bị đánh bại, bạn có thể giảm một chỉ số vật chất của mình đi 1. Khi bạn giết một anh hùng, nhận 1 vào mỗi chỉ số.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Nếu bạn vào phòng có Lammasu, bạn lập tức mất 1 ở mỗi chỉ số; Lammasu bị phá hủy nhưng hiện ra trên một tầng khác (bạn chọn tầng nào; các anh hùng đặt nó cách mọi anh hùng ít nhất 3 ô, đặt vào một landing nếu có thể).',
      },
      {
        heading: 'Luật Điềm Báo Đặc Biệt',
        body: 'Bạn không thể chiếm hữu lá Cat.',
      },
    ],
    monsters: [],
  },

  89: {
    id: 89,
    title: "One of the Master's Affairs",
    intro:
      'Bạn quẳng áo choàng đi — bạn là Rough Ralph, gã hầu gù lưng của Doctor Frank N. Sense! Vị Doctor đâu hề biết rằng căn nhà này là một con tàu vũ trụ, và bạn dự định phóng nó thẳng về hành tinh quê nhà Tinselvania của bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Đặt thanh Lượt/Sát thương về 10 (đồng hồ đếm ngược của con tàu vũ trụ của bạn). Nhận 1 vào mỗi chỉ số. Nếu Theater, Tower, và Underground Lake chưa có trong ván, tìm chúng, đặt vào và xáo lại. Đặt các quái vật vào các phòng theo bảng Cư Dân.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Thanh Lượt/Sát thương về 0 và bạn cất cánh với ít nhất một anh hùng trong nhà.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Mỗi Anh Hùng',
        body: 'Vào cuối lượt mỗi anh hùng, nếu anh hùng đó không ghi được một chiến thắng trong một trong các nhiệm vụ của họ hoặc không tấn công một quái vật, hạ thanh Lượt/Sát thương.',
      },
      {
        heading: 'Cách Các Cư Dân Của Căn Nhà Hoạt Động',
        body: 'Cả bốn chỉ số của mỗi quái vật đều bằng giá trị một chỉ số của bạn (theo bảng); nó tấn công bằng chỉ số đó. Quái vật không đổ xúc xắc để di chuyển. Một quái vật bị choáng sẽ trở về phòng khởi đầu của nó và không trở lại bình thường cho đến khi bạn vào phòng đó. Thêm 1 xúc xắc vào các lần đổ của bạn cho mỗi quái vật không bị choáng trong phòng bạn. Bạn không thể bị làm tổn thương trong một phòng có quái vật không bị choáng.',
      },
      {
        heading: 'Cư Dân',
        body: 'Doctor Frank N. Sense (Operating Laboratory, dùng Knowledge của bạn). Monty / Frankenstein\'s Monster (Gymnasium, Might). Cornucopia / Pirate Queen (Master Bedroom, Sanity). Hedley / Head (Larder, chỉ số thấp nhất của bạn). Fuchsia / token đỏ tía (Dusty Hallway, Speed).',
      },
    ],
    monsters: [],
  },

  90: {
    id: 90,
    title: 'Internal Conflict',
    intro:
      'Ông sếp phong bạn làm Trưởng Nhóm Thực Tập, trao cho bạn một chiếc huy hiệu ngũ giác bóng loáng. "Một điều cuối," ông nói khi bạn rời đi. "Nếu là cậu, tôi sẽ nghĩ đến chuyện loại bỏ các đối thủ cạnh tranh."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Lấy một token item hình ngũ giác (Badge của bạn). Bạn có thể sai khiến các Intern khác miễn là bạn còn giữ Badge.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn là thực tập sinh cuối cùng còn sống.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nếu bạn khám phá một phòng có biểu tượng event, đặt một Employee vào phòng đó trước khi bạn rút lá event của mình.',
      },
      {
        heading: 'Cách Giao Cà Phê',
        body: 'Để giao một Coffee, kết thúc lượt trong cùng phòng với một Employee và gỡ nó về lá của bạn. Nếu bạn giao một Coffee trong lượt này, tăng Speed của bạn lên 1; nếu không, hạ Sanity của bạn đi 1.',
      },
      {
        heading: 'Điều Khiển Các Đối Thủ',
        body: 'Vào cuối lượt của bạn, bạn có thể di chuyển bất kỳ số lượng Intern cạnh tranh nào. Với mỗi người, đổ 1 xúc xắc: 0 rút phòng tiếp theo, đặt nó, và đặt Intern vào đó; 1 di chuyển Intern tới bất kỳ phòng nào ở tầng trên hoặc tầng dưới; 2 di chuyển Intern tối đa bằng Speed của họ, bỏ qua hiệu ứng phòng.',
      },
    ],
    monsters: [],
  },

  91: {
    id: 91,
    title: 'Burn out the Darkness',
    intro:
      'Bóng tối ở khắp mọi nơi, bao bọc lấy bạn. Một bóng tối đẹp đẽ làm sao; chắc chắn bạn phải chia sẻ nó với thế giới, bắt đầu từ những ngọn lửa độc hại kia và những kẻ ngốc đang cố lan truyền chúng.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Haunt này có thể có nhiều kẻ phản bội. Bạn giờ là Darkness, và chẳng có ích gì khi tấn công nó. Gỡ các kẹp khỏi lá nhân vật của bạn; nếu khi nào cần đổ chỉ số, kết quả của bạn là 5. Bỏ tất cả lá bài của bạn. Darkness lặng lẽ — bạn chỉ được nói thì thầm.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả Fires đều bị dập tắt trong lượt của bạn và vẫn còn ít nhất một số phòng đang ngửa lên bằng số kẻ phản bội, hoặc tất cả anh hùng đều là Darkness.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Mỗi lượt một lần, tấn công một anh hùng trong tầm nhìn của bạn bằng sự đen tối trong tâm hồn họ (tấn công Sanity, kết quả 5). Khi thắng họ nhận sát thương tinh thần; nếu không, lượt của bạn kết thúc. Khi một anh hùng sắp chết vì bất kỳ lý do nào, anh hùng đó gia nhập Darkness và trở thành kẻ phản bội. Các token quái vật đại diện cho Fire và không đi lượt.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Bạn không thể khám phá phòng nữa. Mỗi lượt, di chuyển của bạn là số xúc xắc bằng con số Speed cao nhất của bạn trừ đi số token Fire trong phòng bạn. Các token Fire ngửa lên tính là đối thủ. Trong bất kỳ phòng nào, bạn có thể cố dập các Fire của nó (đổ 1 xúc xắc cho mỗi Fire; một mặt không trống sẽ gỡ một token úp xuống hoặc lật một token ngửa lên). Coi các mảnh phòng úp xuống như có cửa ở mỗi cạnh (không chặn tầm nhìn); tốn 1 ô di chuyển để đi xuyên tường sang phòng kề bên.',
      },
    ],
    monsters: [],
  },

  92: {
    id: 92,
    title: 'Ghost at the Finish Line',
    intro:
      'Haunt này không có kẻ phản bội — chỉ có các anh hùng. Tất cả các bạn đang cố trở thành người tìm ra căn phòng cuối cùng trong nhà. Phần luật còn lại nằm trong Secrets of Survival.',
    sections: [
      {
        heading: 'Nơi Tìm Luật',
        body: 'Kịch bản này không có kẻ phản bội; toàn bộ luật nằm trong cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  93: {
    id: 93,
    title: "Owl's Moving Castle",
    intro:
      'Căn nhà của bạn đang di chuyển tới một vùng đất kỳ diệu đầy những con cú — bất kể nó có thể đang lao ra khỏi mép một vách đá. Bạn là một Owl, và chẳng mấy chốc mọi người khác cũng vậy.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Nếu bất kỳ tầng nào cách mọi mép bàn hơn hai chiều dài mảnh phòng, di chuyển tầng đó sao cho ít nhất một mảnh cách mép đúng hai chiều dài. Đặt quân của bạn vào bất kỳ phòng nào trên tầng của bạn. Hãy phát mọi âm "oo" thành một âm "oooo" thật dài — bạn là một Owl.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Cũng như bạn, họ đều là Owls — nhưng vì lý do nào đó họ không muốn vậy, và họ cũng không muốn bạn là một con.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết, hoặc tất cả anh hùng còn sống không còn token nhà thám hiểm nào và bị kẹt làm Owls mãi mãi.',
      },
      {
        heading: 'Cách Hành Động Khi Bạn Đã Là Một Owl',
        body: 'Bạn có thể bay: di chuyển trên các mảnh đã lật và băng qua những khoảng trống không có mảnh phòng giữa các phần (nếu bạn vào/ra qua một cửa sổ hoặc phòng ngoài trời; mỗi ô trống = 2 ô di chuyển; ở yên cùng tầng; kết thúc bên trong căn nhà). Speed của bạn gấp đôi giá trị trên lá (tối đa 8 xúc xắc cho các lần đổ Speed); bạn không nhận sát thương do rơi. Bạn không thể dùng lá item hay omen.',
      },
      {
        heading: 'Cách Di Chuyển Căn Nhà',
        body: 'Vào cuối lượt của bạn, đổ số xúc xắc bằng số anh hùng và di chuyển tối đa bấy nhiêu mảnh phòng về phía mép bàn (Grand Staircase/Foyer/Entrance Hall tính là ba mảnh, di chuyển cùng một lúc). Các mảnh bị đẩy khỏi bàn sẽ không còn tồn tại. Bạn không thể di chuyển một mảnh bị bao quanh cả bốn cạnh, cũng không thể di chuyển một mảnh sẽ cắt rời một tầng (trừ khi cả hai phần đều có cửa sổ/phòng ngoài trời). Di chuyển mảnh của một anh hùng sẽ biến họ thành Owl (không mất Sanity, nhưng nếu mảnh đó rơi xuống thì họ hạ Sanity về thấp nhất và trở thành Owl trong phòng được đặt lại). Các landing chỉ di chuyển nếu ít nhất một nửa số cửa của chúng chưa được nối; một phòng đơn độc trên tầng của nó thì không thể di chuyển.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Mỗi lượt một lần khi là Owl, rúc lên với các anh hùng trong phòng bạn: với mỗi người, tấn công Might hoặc Sanity. Khi thắng họ chia sát thương; nếu nó làm một chỉ số tụt xuống biểu tượng đầu lâu (ngưỡng tử), họ biến thành Owl (Sanity về giá trị thấp nhất phía trên đầu lâu).',
      },
    ],
    monsters: [],
  },

  94: {
    id: 94,
    title: 'Last Will and Tournament',
    intro:
      'Bà cô lập dị Edwina của bạn đã qua đời, và bạn được gọi đến để đọc di chúc của bà. Tranh cãi về bộ sưu tập của bà biến thành lòng tham, cho đến khi kẻ phản bội cất tiếng bằng giọng của bà: "Lũ vô ơn các ngươi! Đặt đồ của ta xuống, và cút khỏi nhà ta!"',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội, bị linh hồn tham lam của bà cô Edwina chiếm hữu. Đếm các lá item và omen của bạn có thể trao đổi hoặc bị trộm (đây là các Bequest của bạn). Khi các anh hùng đã sẵn sàng, nếu tổng Bequest của bạn không cao hơn của anh hùng đơn lẻ có nhiều nhất, hãy rút lá item cho đến khi cao hơn. Nếu các chỉ số của bạn dưới giá trị khởi đầu, nâng chúng lên, rồi tăng một chỉ số thêm 1.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn kết thúc lượt với tất cả các lá Bequest, hoặc tất cả các nhà thám hiểm khác đã chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Sau Mỗi Lượt',
        body: 'Nếu tổng Bequest của bạn bằng hoặc nhỏ hơn của một nhà thám hiểm khác, tất cả các nhà thám hiểm đổ số xúc xắc bằng tổng Bequest của họ (tối đa 8, tối thiểu 1), +1 nếu đang ở phòng có item. Kết quả cao nhất trở thành kẻ phản bội (hòa → người gần bên trái bạn nhất). Khi bạn thôi làm kẻ phản bội, đưa một Bequest ngẫu nhiên và Traitor\'s Tome cho kẻ phản bội mới; bạn trở thành anh hùng. Nếu bạn chết khi là kẻ phản bội, các anh hùng đổ xúc xắc để xem ai bị chiếm hữu.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Mỗi lượt một lần, thử giành lại một Bequest từ một nhà thám hiểm trong phòng bạn bằng cách tấn công với bất kỳ chỉ số nào (+1 xúc xắc nếu ở phòng có item). Khi thắng, đổ trên bảng Định Đoạt Bequest; đợt tấn công không gây sát thương.',
      },
      {
        heading: 'Luật Vật Phẩm Và Điềm Báo Đặc Biệt',
        body: 'Bạn không được tự nguyện trao đổi hay làm rơi lá bài, và phải nhặt mọi lá bài bị làm rơi trong phòng bạn. Khi bạn chết, làm rơi tất cả Bequest thành một chồng item; với mỗi lá, đổ 1 xúc xắc — một mặt trống sẽ bỏ lá đó đi.',
      },
      {
        heading: 'Định Đoạt Bequest',
        body: '0 nhà thám hiểm bị tấn công bỏ một Bequest ngẫu nhiên. 1 trộm một Bequest ngẫu nhiên từ họ. 2 trộm một Bequest bạn tự chọn từ họ.',
      },
    ],
    monsters: [],
  },

  95: {
    id: 95,
    title: 'Nanny, Interrupted',
    intro:
      '"Cô biết các con háo hức được lớn lên, nhưng nếu theo ý cô, các con sẽ mãi giữ nguyên độ tuổi này." Trần nhà cao dần lên — cho đến khi bạn nhận ra thật ra mình đang nhỏ lại.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Nếu bất kỳ chỉ số nào của bạn dưới giá trị khởi đầu, nâng chúng về giá trị khởi đầu.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Lũ trẻ hư phải bị gom lại và đưa về Nursery để có một giấc ngủ ngon.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều ở trong Nursery và đã biến trở lại thành những đứa bé như xưa.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể tấn công vật chất thông thường; mỗi lượt một lần bạn có thể thực hiện một trong mỗi hành động sau (không hành động nào có thể làm tổn thương bạn). Hồi tưởng: tấn công Knowledge nhằm vào một anh hùng chưa thành em bé trên tầng của bạn → sát thương tinh thần; một chỉ số tụt xuống biểu tượng đầu lâu (ngưỡng tử) sẽ biến họ thành em bé. Vác em bé qua vai: khi một em bé đang ở trong hoặc đang ra khỏi phòng bạn, tấn công Speed (không gây sát thương); khi thắng, vác họ lên lá của bạn (có thể vác nhiều). Gọi tên đệm của em bé: trong tầm nhìn hoặc đang vác một em bé, nói đầy đủ tên họ và "Về phòng ngay!", rồi tấn công Sanity (+1 xúc xắc cho mỗi em bé đang vác); khi thắng, đặt em bé vào Nursery.',
      },
      {
        heading: 'Luật Sát Thương Đặc Biệt',
        body: 'Khi bạn nhận sát thương, bạn phải làm rơi lá item, lá omen, và/hoặc em bé bằng số sát thương đó, nếu có thể.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Thêm 1 xúc xắc vào Speed để di chuyển. Bạn có chìa khóa cửa trước (ra/vào Entrance Hall). Bạn có thể rời đi bằng cách nhảy qua cửa sổ hoặc phòng ngoài trời: mái (5 xúc xắc vật chất), tầng trên (3 xúc xắc), hoặc tầng trệt (1 xúc xắc); không nhận sát thương nếu có lá Rope. Một khi ra ngoài, đi quanh chu vi tầng trệt (mỗi cạnh mảnh ngoài trời là một phòng riêng).',
      },
    ],
    monsters: [],
  },

  96: {
    id: 96,
    title: 'House of Leavings',
    intro:
      'Bạn bị kéo vào một chiều không gian khác — một căn nhà giống căn nhà bạn vừa rời đi, nhưng được sắp xếp khác hẳn. Người bạn của bạn cười điên dại rồi chạy biến đi, và một tiếng khịt mũi rùng rợn vang theo sau. Có một con minotaur. Bạn không muốn tưởng tượng đến một con minotaur đâu.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội. Đặt quân của bạn và token Demon Lord hình tròn lớn (Minotaur) vào Grand Staircase. Để sang một bên các token quái vật nhỏ màu vàng (Claw Marks) bằng số nhà thám hiểm. Hạ Speed của bạn về giá trị thấp nhất phía trên biểu tượng đầu lâu (ngưỡng tử).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đã chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Mỗi Anh Hùng',
        body: 'Vào cuối lượt mỗi anh hùng, nếu anh hùng đó không nằm trong tầm nhìn của Minotaur, họ nhận 1 xúc xắc sát thương tinh thần. Sau khi anh hùng kiểm tra tầm nhìn, bạn có thể di chuyển Minotaur tới bất kỳ phòng nào trong tầm nhìn của bạn, và có thể đặt một Claw Mark vào phòng nó vừa rời đi (một khi đã đặt, nó không thể di chuyển). Minotaur không có lượt quái vật.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn và Minotaur không thể tấn công các anh hùng. Các anh hùng có thể tấn công Sanity nhằm vào Minotaur (nó phòng thủ bằng Sanity của bạn); nếu nó đánh bại một anh hùng, gây sát thương tinh thần và di chuyển anh hùng đó tới bất kỳ phòng nào trong tầm nhìn của họ. Các chỉ số của bạn không thể tụt dưới giá trị thấp nhất phía trên biểu tượng đầu lâu (ngưỡng tử); nếu bạn sắp bị giết, hạ chỉ số đó về giá trị thấp nhất phía trên và di chuyển tới Upper Landing.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Tất cả các phòng bạn khám phá đều được coi là "mới" và phải được khám phá bình thường. Nếu một nhà thám hiểm rút Abandoned Room và nó sắp được đặt kề một Claw Mark, xáo nó trở lại; nếu rút lại ngay lập tức, đặt nó bất kể.',
      },
      {
        heading: 'Luật Điềm Báo Đặc Biệt',
        body: 'Bạn không thể nhặt, trộm, hay mang lá omen đã khởi đầu haunt.',
      },
    ],
    monsters: [],
  },

  97: {
    id: 97,
    title: 'Lambs to the Slaughter',
    intro:
      'Tiếng hú và đập cửa đầy điềm gở. Những đôi mắt đỏ lóe lên khi lũ Wolves lảng vảng bên ngoài cửa sổ. "Owwwwwooo." Khoan đã... tiếng đó phát ra từ bên trong nhà sao? Nó phát ra từ bạn ư?',
    sections: [
      {
        heading: 'Nơi Tìm Luật',
        body: 'Haunt này dùng luật kẻ phản bội ẩn được mô tả ở trang 17 của sách luật trò chơi gốc. Phần luật còn lại nằm trong cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  98: {
    id: 98,
    title: 'Plastic Fantastic',
    intro:
      'Bạn đến một nhà nghỉ yên tĩnh ở Uncanny Valley để tìm chút thanh thản, nhưng ai đó đã bày la liệt cả triệu ma-nơ-canh mắt trống rỗng quanh nó. Khoan — một trong số chúng vừa nhúc nhích.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván và chưa trở thành kẻ phản bội, nhưng đã bị hấp thụ vào lũ Mannequins. Gỡ quân của bạn ra và bỏ các lá bài của bạn. Đặt một token quái vật nhỏ (Mannequin) bất kỳ màu nào vào mỗi phòng, ở mặt choáng, đặt ngẫu nhiên.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả các Mannequin đã rời khỏi nhà và còn ít nhất một anh hùng còn sống — tức là, bạn thắng khi các anh hùng thắng.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Mỗi Anh Hùng',
        body: 'Vào cuối lượt mỗi anh hùng, kiểm tra các hành động khiêu khích. Với mỗi hành động mà anh hùng đã không làm, nêu ra sự khiêu khích, đổ 2 xúc xắc, và lật bấy nhiêu Mannequins đang choáng của màu được liệt kê sang mặt ngửa. Nếu không đủ token để lật, di chuyển một token màu đó về phía anh hùng cho mỗi cái bạn không thể lật.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Quái Vật',
        body: 'Di chuyển tất cả Mannequins đang choáng về phía Entrance Hall (theo Speed của chúng); một Mannequin đang choáng ở Entrance Hall mà còn dư di chuyển sẽ rời khỏi nhà. Chọn một màu để không kiểm tra khiêu khích cho đến lượt quái vật kế tiếp. Di chuyển các Mannequins ngửa lên về phía anh hùng gần nhất (dụ theo bất kỳ Mannequins ngửa lên màu nào trên đường đi). Sau khi di chuyển, các Mannequins ngửa lên trong một phòng tấn công mỗi anh hùng ở đó.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Các Mannequins ngửa lên cùng nhau tấn công Might nhằm vào mỗi anh hùng trong phòng chúng (số xúc xắc bằng số Mannequins ngửa lên, tối đa 8). Chúng làm bằng nhựa và không thể bị làm tổn thương bằng các đợt tấn công vật chất. Nếu một anh hùng tấn công tinh thần nhằm vào một Mannequin, đổ số xúc xắc bằng số Mannequins ngửa lên; nếu bạn thua, lật úp tất cả Mannequins trong phòng đó.',
      },
      {
        heading: 'Hành Động Khiêu Khích',
        body: 'Nếu một anh hùng không... Khám phá một phòng → đổ cho token Đỏ. Di chuyển sang tầng mới → Cam. Dùng một item hoặc omen → Vàng. Tấn công → Lục. Dùng hết di chuyển của họ → Lam. Rời một phòng có quái vật → Tím và Đỏ tía.',
      },
    ],
    monsters: [{ name: 'Mannequins', stats: 'Speed 3 · Might 1 · Sanity 1 · Knowledge 1' }],
  },

  99: {
    id: 99,
    title: 'The Manor of Your Demise',
    intro:
      'Một chiếc hộp mở ra và âm ỉ cháy. Bạn ghé sát vào và bị hút đầu trước vào trong một căn nhà rùng rợn tí hon. Haunt này không có kẻ phản bội — chỉ có các anh hùng. Tất cả các bạn đang cố tìm ra chiếc Box. Phần luật còn lại nằm trong Secrets of Survival.',
    sections: [
      {
        heading: 'Nơi Tìm Luật',
        body: 'Kịch bản này không có kẻ phản bội; toàn bộ luật nằm trong cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  100: {
    id: 100,
    title: "Let's Play a Game",
    intro:
      'Một cuốn băng cassette cũ nát khàn khàn cất tiếng: "Ta nghĩ tất cả chúng ta sẽ thích một trò chơi nho nhỏ. Căn nhà này đầy những thử thách do ta thiết kế, được hẹn giờ để thiêu cháy cùng các ngươi bên trong. Mỗi người giờ phải đưa ra một lựa chọn: các ngươi có tin bạn bè mình không? Các ngươi có cần họ không?"',
    sections: [
      {
        heading: 'Về Haunt Này',
        body: 'Haunt này không có kẻ phản bội — chỉ có các anh hùng. Luật thiết lập, bỏ phiếu, và chiến thắng nằm trong cuốn Secrets of Survival; 24 Thử Thách dưới đây được đọc từ đây khi các nhà thám hiểm lật chúng ra. Nếu một hướng dẫn nói lật token hoặc để nó ngửa lên, thì Thử Thách chưa bị khắc phục; nếu không thì nó đã bị khắc phục (token lên lá của bạn).',
      },
      {
        heading: 'Thử Thách (1–12)',
        body: '1 Javelin: Speed 4+ hoặc nhận 1 sát thương vật chất và lật; khi thành công, lấy Spear nếu nó chưa có trong ván. 2 Voice: đặt lại một chỉ số vật chất về giá trị thấp nhất phía trên đầu lâu, nếu không thì lật và (nếu trong một đội) đồng đội mất 1 Sanity. 3 Reflection: Sanity 4+ hoặc mất 2 Sanity và lật (đồng đội nhận 1 sát thương vật chất); khi thành công, lấy Idol. 4 Mechanical arm: Might 6+ → nhận 1 Might và di chuyển sang phòng kề bên; thất bại → bị kẹt cho đến khi đổ Might 6+. 5 Axe: Speed hoặc Might 3+ hoặc nhận 2 sát thương vật chất và lật; khi thành công, lấy Axe. 6 Gun: lấy Revolver và tấn công một nhà thám hiểm trong tầm (có thể nhắm vào chính mình). 7 Hurt: người chơi đơn lẻ nhận 3 sát thương chia theo ý mình; đội đổ Knowledge 4+ hoặc mỗi đồng đội nhận 2 sát thương tinh thần và lật — khi thành công gây 5 sát thương vật chất hoặc 5 sát thương tinh thần chia giữa các đồng đội. 8 Dew: Sanity hoặc Knowledge 5+ → nhận 2 vào chỉ số đó; thất bại → mất 1 ở chỉ số tinh thần kia và lật. 9 Empty box: để các item của bạn sang một bên (không thể nhặt lên); người đơn lẻ mất 1 Sanity, đội mất 2 Sanity chia ra. 10 Numbers: Knowledge 5+; thất bại → 1 sát thương tinh thần và lật; khi thành công, lấy Puzzle Box. 11 Tested: mọi người đổ 8 xúc xắc — cao nhất lấy token, thấp nhất giảm một chỉ số vật chất, có hòa thì lật nó. 12 Give and take: Knowledge 5+; thất bại → 2 sát thương vật chất và lật; người đơn lẻ thành công thì giảm một chỉ số vật chất của một nhà thám hiểm, đội thành công thì hồi sinh một đồng đội đã chết bằng cách giảm chỉ số của chính mình.',
      },
      {
        heading: 'Thử Thách (13–24)',
        body: '13 Nothing here: trả token lại; nó không được tính. 14 Floor drops: di chuyển mỗi nhà thám hiểm ở đây tới Basement Landing (hoặc Roof Landing) và kết thúc lượt; một người đến sau có thể hoàn thành nó. 15 Smoke: hạ thanh Lượt/Sát thương; một đội chưa có chiến thắng của mình thì lật nó. 16 Alarm: chọn một nhà thám hiểm để tấn công bạn, rồi tấn công họ; hoặc xáo token vào chồng đặt phòng mới để nhận 1 Sanity. 17 Full box: trừ 2 vào các lần đổ Knowledge ở đây khi nó còn ngửa lên; Knowledge 4+ — khi thành công với Thử Thách 9 đang ngửa lên, lấy cả hai và mọi item ở cạnh phòng đó. 18 Blood for blood: Knowledge 6+; thất bại → lật; khi thành công lấy Sacrificial Dagger (người cầm nó phải tấn công một nhà thám hiểm khác). 19 Awaken: đặt token và quân của bạn vào Entrance Hall (đội: thêm một đồng đội nữa); khi ở Entrance Hall vào đầu lượt của bạn, đặt lại Knowledge về thấp nhất để khắc phục. 20 Crumple: để ngửa lên và kết thúc lượt; một người bắt đầu sau có thể khắc phục nó. 21 Crime pays: trộm bất kỳ số lượng item nào của một nhà thám hiểm (tối thiểu một), nhận 1 sát thương tinh thần cho mỗi item. 22 Unfortunate events: rút ba lá event và làm theo chúng (đội có thể đưa chúng cho đồng đội); nếu bất kỳ ai mất một điểm chỉ số, lật. 23 Allegiances: một người đơn lẻ có thể gia nhập đội (nếu không thì lật); một thành viên đội có thể trở thành người đơn lẻ (nếu không thì lật). 24 Profit: tấn công Speed nhằm vào bất kỳ số lượng nhà thám hiểm nào (không gây sát thương); mỗi người thắng lấy một Thử Thách từ kẻ thua; thua bất kỳ trận nào hoặc không tấn công → lật.',
      },
    ],
    monsters: [],
  },

  101: {
    id: 101,
    title: 'Seasons of the Witch',
    intro:
      '"Sau December là gì?" người bạn của bạn hỏi, lật qua trang cuối cùng và biến hình thành một mụ phù thủy dày dạn. "KHÔNG. KHÔNG CÒN THÁNG NÀO NỮA." Mụ phù thủy Magdalena Gunchester sẽ giam bạn trong căn nhà này trọn một năm. (Đây là phần kết; đọc to từng Tháng theo thứ tự vào đầu lượt của người mở haunt.)',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt thanh Lượt/Sát thương về 0 trước mặt người mở haunt (nó theo dõi các Tháng). Nếu bất kỳ chỉ số nào dưới giá trị khởi đầu, nâng chúng lên. Ghi lại sinh nhật của mỗi anh hùng trên Lịch. Đặt tất cả các mảnh phòng vào nhà. Đặt token Witch hình tròn lớn (Magdalena) vào Widow\'s Walk. Đặt một token Plant (Food) vào Dining Room, Gardens, Kitchen, Larder, Tree House, và Wine Cellar; Fountain (Water) vào Underground Lake; token Smoke (Coal) vào Furnace Room. Để sang một bên token Cat, các token quái vật/Obstacle/Trait Roll có màu, và các token nhà thám hiểm của mỗi anh hùng. Đọc January và đi lượt đầu tiên; đừng đọc trước.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Magdalena, mụ phù thủy điên loạn thừa kế gia sản Gunchester, đã phù phép căn nhà này để giam bạn trong một năm và thề rằng những cách thức bạo lực của loài người sẽ là dấu chấm hết cho chính nó.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Ít nhất một người trong các bạn sống sót qua mười hai Tháng trong nhà và đánh bại Magdalena.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Người Mở Haunt',
        body: 'Vào đầu lượt của người mở haunt, tăng thanh Lượt/Sát thương và chỉ đọc phần của Tháng đó. Quá 12, đọc phần cuối cùng. Magdalena không di chuyển khỏi Widow\'s Walk, nhưng tấn công bất kỳ anh hùng nào ra khỏi đó.',
      },
      {
        heading: 'Mười Hai Tháng',
        body: 'January: một cơn bão đang kéo đến — bạn có thể đóng ván che cửa sổ/phòng ngoài trời (token Boards trong phòng bạn). [Vivian Lopez: +3 ô di chuyển.] February: bão tuyết — vào đầu lượt của bạn, nhận 1 sát thương vật chất cho mỗi cửa sổ/phòng ngoài trời trong vòng 4 ô mà không có Boards. [Missy Dubourde: mỗi anh hùng +2 Might.] March: mèo phóng to — Lioness ở Upper Landing, Cubs ở mỗi landing khác, mỗi con tấn công anh hùng gần nhất, rồi gỡ chúng ra. [Jenny LeClerc: +2 xúc xắc cho mọi phòng thủ trong lượt này.] April: rắn theo nước lụt — với mỗi phòng nối với Underground Lake, đổ 3 xúc xắc và đặt bấy nhiêu Snakes màu lục; Snakes di chuyển 4 về phía anh hùng gần nhất; một anh hùng trong phòng có Snake đổ Speed 5+ nếu không sẽ nhận 1 sát thương vật chất và một token; giữ lại các Snakes. [Father Rhinehardt: để sang một bên tất cả token nhà thám hiểm vào cuối lượt.] May: bầy rắn lấn tới — Snakes di chuyển và tấn công như trong April; mỗi anh hùng có một token nhận 1 sát thương vật chất, rồi gỡ các Snakes. [Brandon Jaspers: mỗi anh hùng +2 Knowledge.] June: chuột — một anh hùng có một token nhận 1 sát thương vật chất rồi để các token sang một bên; vào cuối Tháng, một anh hùng trong phòng có Food đổ Speed 5+ nếu không sẽ để Food đó sang một bên. [Darrin "Flash" Williams: mỗi anh hùng +2 Speed.] July: nắng nóng — tốn 3 ô di chuyển trong Gardens, Kitchen, hoặc Tree House và đổ Knowledge 5+ để trồng Food; vào cuối mỗi lượt, đổ Might — nếu nó không vượt quá số ô bạn đã di chuyển, nhận phần chênh lệch làm sát thương vật chất. [Professor Longfellow: trồng Food trong Wine Cellar miễn phí.] August: khói tràn vào Coal Chute, Furnace Room, và các phòng có event — các anh hùng ở trong hoặc nối với một phòng như vậy nhận 1 sát thương vật chất; vào cuối Tháng, một anh hùng trong Furnace Room đổ Knowledge 5+ để sửa nó, nếu không Coal bị để sang một bên. [Heather Granville: nếu Coal bị để sang một bên, đặt nó lại.] September: châu chấu — vào cuối Tháng, mỗi anh hùng trong phòng có Food đổ Sanity 5+ nếu không sẽ để Food đó sang một bên. [Peter Akimoto: mỗi anh hùng +2 Sanity.] October: động đất — vào cuối Tháng, với mỗi phòng tầng hầm không phải landing đổ 2 xúc xắc; một mặt trống sẽ gỡ phòng đó và các token của nó; một anh hùng ở đó đổ Speed 4+ để tới Basement Landing nếu không sẽ chết. [Ox Bellows: chọn một phòng để không phải đổ xúc xắc.] November: cạn lương thực — vào cuối Tháng, gỡ một Food cho mỗi anh hùng cộng với Water và Coal; với mỗi cái bạn không thể gỡ, mỗi anh hùng nhận 1 sát thương tinh thần. [Zoe Ingstrom: gỡ ít hơn 2 Food.] December: dơi quỷ — đặt một Bat vào mỗi phòng; ở một cửa sổ/phòng ngoài trời mà bạn đang chiếm và không có token Obstacle, gỡ các Bats ở đó và ở các phòng nối liền (tốn 3 ô di chuyển để dọn một Obstacle); vào cuối Tháng, Bats gây 1 xúc xắc cho mỗi Bat trên một tầng vào mỗi anh hùng trên tầng đó, rồi gỡ chúng. [Madame Zostra: gỡ thêm sáu Bats.]',
      },
      {
        heading: 'Sau Tháng 12: Không Còn Tháng Nào',
        body: 'Bị thôi miên, tất cả anh hùng di chuyển tới Widow\'s Walk. Bắt đầu từ người mở haunt, mỗi anh hùng đi một lượt tấn công Magdalena bằng bất kỳ chỉ số nào; đánh bại được mụ thì đặt token Trait Roll của chỉ số đó cạnh Witch (bạn không thể dùng lại một chỉ số đã đặt cho đến khi cả bốn loại đều đã hạ xuống). Tiếp tục tấn công cho đến khi tất cả các bạn chết hoặc bạn đặt được số token Trait Roll bằng số anh hùng đã bắt đầu haunt — khi đó bạn thắng.',
      },
      {
        heading: 'Lịch (Sinh Nhật)',
        body: '1 January Vivian Lopez · 2 February Missy Dubourde · 3 March Jenny LeClerc · 4 April Father Rhinehardt · 5 May Brandon Jaspers · 6 June Darrin "Flash" Williams · 7 July Professor Longfellow · 8 August Heather Granville · 9 September Peter Akimoto · 10 October Ox Bellows · 11 November Zoe Ingstrom · 12 December Madame Zostra.',
      },
    ],
    monsters: [
      { name: 'Magdalena Gunchester', stats: 'Speed 8 · Might 8 · Sanity 8 · Knowledge 8' },
      { name: 'Lioness', stats: 'Speed 6 · Might 5' },
      { name: 'Cubs', stats: 'Speed 4 · Might 3' },
    ],
  },
};
