import type { HauntStory } from '../../types';

export const SS_VI_2: Record<number, HauntStory> = {
  26: {
    id: 26,
    title: 'Trả Giá Cho Gã Thổi Sáo',
    intro:
      'Những tiếng động đáng nguyền rủa đó! Bạn đập vào tường và tiếng loẹt xoẹt, sột soạt, cào cấu ngừng lại - rồi lại bắt đầu, to hơn. Một nhà thám hiểm lắng nghe với vẻ mặt sung sướng đến cực độ tựa như đau đớn, và bạn nhận ra người bạn của mình trông giống chuột đến mức nào. Kẻ phản bội thốt ra một từ bằng giọng cao kinh khủng: "Ăn đi!" Lũ chuột tràn ra từ dưới chân tường. Hoặc là bạn, hoặc là chúng.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Trước khi kẻ phản bội đặt các token Rat, hãy chuyển bất kỳ nhà thám hiểm nào đang ở trong Pentagram Chamber sang một phòng kề bên nó (không cần cửa thông nhau).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đang thực hiện một nghi lễ chuột-quỷ tà ác trong Pentagram Chamber. Bạn chỉ có thể ngăn chặn bằng cách giết nhanh mọi con Rat trong căn nhà. Hãy coi chừng các bầy đàn tấn công cùng lúc.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tiêu diệt toàn bộ lũ Rat, hoặc bạn giết kẻ phản bội trước khi hắn đến được Pentagram Chamber.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Gây bất kỳ sát thương nào lên một con Rat sẽ giết nó.\nCác anh hùng không thể tác động đến kẻ phản bội bằng bất kỳ cách nào khi hắn đang ở trong Pentagram Chamber. Cả Rat lẫn anh hùng đều không thể vào Pentagram Chamber.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Vết cắn của chuột rỉ máu trên tay, chân và da đầu bạn. Bạn vẫn còn cảm nhận được những thân hình ấm áp đầy lông căng mình lao tới cắn xé. Nhưng cuối cùng các bầy đàn đã chết. Bạn hy vọng cuối cùng mình đã an toàn. ... loẹt xoẹt, sột soạt, cào cấu ...',
      },
    ],
    monsters: [],
  },

  27: {
    id: 27,
    title: 'Thịt Cuồng Loạn',
    intro:
      'Bạn đưa quả cầu pha lê lên sát mắt; một cục máu hồng nhạt mắc kẹt ở chính giữa. Quả cầu đập nhịp, bạn đánh rơi nó, và nó vỡ tan. Một khối thịt nhầy nhụa lộ ra giữa đám mảnh vỡ - một cái lòng đỏ sủi bọt và phình to, tăng gấp đôi kích thước sau mỗi vài giây. Nó dâng lên phía trước khi bạn lùi lại. Liệu nó có bao giờ ngừng lớn không?',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Người chơi có nhà thám hiểm đang giữ Crystal Ball bỏ lá đó đi; ai đang ở trong phòng đó nên di chuyển đi nhanh, vì đó là nơi Blob bắt đầu phát triển.\nĐể riêng ra số token Knowledge Roll hình tam giác bằng số người chơi. Để riêng ra số token Sanity Roll hình tam giác tương đương.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Blob đang lan rộng. Nếu bạn dừng lại trong một phòng có token Blob, bạn trở thành Blob-người (mục tiêu mới của bạn là giúp kẻ phản bội thắng).',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tiêu diệt Blob.',
      },
      {
        heading: 'Cách Tiêu Diệt Blob',
        body: 'Mỗi lượt một lần, ở một phòng kề bên (có cửa thông nhau) với token Blob, thử đổ Knowledge 3+ để xem xét Blob; mỗi lần thành công đặt một token Knowledge Roll lên thẻ nhân vật của bạn.\nTìm ra điểm yếu của Blob cần số lần đổ Knowledge thành công bằng số người chơi; khi lần cuối thành công, để riêng tất cả các token đó ra.\nSau đó tìm công thức hóa học: số thành phần bằng số người chơi. Mỗi lượt một lần, đổ Knowledge 3+ để tìm một thành phần trong Attic, Conservatory, Furnace Room, Gardens, Library, một trong hai Laboratory, Junk Room, Kitchen, Larder, Storeroom, một Vault đã mở, hoặc Wine Cellar. Mỗi lần thành công đặt một token Knowledge Roll lên thẻ của bạn và một token Sanity Roll vào phòng đó (không tìm kiếm ở đó nữa).\nTừ một phòng kề bên (cửa thông nhau), tốn 1 ô để ném một thành phần vào Blob: chuyển một token Knowledge Roll từ thẻ của bạn sang phòng của Blob. Khi số thành phần đã ném bằng số người chơi, toàn bộ Blob bị tiêu diệt.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn ném cốc thí nghiệm vào vùng thịt sủi sục đập nhịp; khối thịt hấp thụ nó tức thì. Căn nhà rung chuyển; khối thịt run rẩy, bốc hơi, tự nuốt lấy chính mình trong một cơn co giật dữ dội. Tất cả những gì còn lại là những vũng chất lỏng hôi thối, mẩu xương vụn và những sợi da nửa tan rữa.',
      },
    ],
    monsters: [],
  },

  28: {
    id: 28,
    title: 'Chiếc Nhẫn Của Vua Solomon',
    intro:
      'Khi bạn xem xét chiếc nhẫn, những dòng khắc tự sắp xếp lại thành những từ bạn đọc được: "Chiếc Nhẫn Của Vua Solomon." Rồi: "Lũ Quỷ Quỳ Lạy Ngươi." Và cuối cùng: "Cổng Địa Ngục Đã Mở." Căn nhà rung chuyển; một làn gió nóng, ngọt lợm thổi qua. Một tiếng thét hứa hẹn cả một kỷ nguyên đau đớn vang lên từ phòng khác - có lẽ là một con quỷ từ Địa Ngục.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Lũ quỷ đang tiến vào căn nhà qua một cánh cổng từ Địa Ngục. Chúng muốn giết tất cả mọi người. Các con quỷ khác nhau có những đặc tính vật chất và tinh thần khác nhau.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tiêu diệt Demon Lord. Để làm vậy, đánh bại nó hai lần khi đang mang chiếc Ring. Mỗi đòn tấn công có thể dùng Might hoặc Sanity.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Đòn tấn công Sanity nhắm vào Demon Lord khi dùng chiếc Ring cộng thêm 2 vào kết quả đổ của bạn. Đánh bại nó lần đầu làm nó choáng; lần thứ hai tiêu diệt nó. (Nếu Demon Lord tấn công người mang Ring và thua, điều đó tính là một trong hai lần bị đánh bại.)\nĐòn tấn công Sanity thành công nhắm vào bất kỳ con quỷ nào khác khi dùng chiếc Ring sẽ giành quyền điều khiển con quỷ đó; bạn có thể di chuyển nó và tấn công các con quỷ khác hoặc kẻ phản bội trong các lượt sau. Một anh hùng khác cầm chiếc Ring sẽ điều khiển những con quỷ đã bị khuất phục; nếu chiếc Ring bị rơi hoặc bị kẻ phản bội cướp, mọi con quỷ đang bị điều khiển trở nên không bị điều khiển.\nNếu bạn đánh bại một con quỷ hoặc Demon Lord mà không có chiếc Ring, bạn chỉ làm nó choáng.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Chiếc Nhẫn Của Vua Solomon rực cháy khi demon lord gục ngã. Cơn gió đảo chiều; Cổng Địa Ngục trở thành Lỗ Thoát Địa Ngục, hút ngược những ngọn lửa vào. Những tua lửa túm lấy từng con quỷ và kéo nó vào miệng vực. Khi con quỷ rít gào cuối cùng biến mất, Lỗ Thoát Địa Ngục khép lại như một con mắt nhắm. Địa Ngục đã xong việc với bạn - nhưng bạn đã xong việc với Địa Ngục chưa?',
      },
    ],
    monsters: [],
  },

  29: {
    id: 29,
    title: 'Di Sản Của Frankenstein',
    intro:
      'Người bạn thám hiểm của bạn chăm chú đọc những trang giấy ố vàng, lẩm bẩm về việc hồi sinh thịt người chết. Rồi anh ta ngẩng lên, mắt rực lửa cuồng nhiệt. "Đến phòng thí nghiệm! Đêm nay, ta sẽ hiện thực hóa giấc mơ tái sinh xác chết! Đêm nay, kẻ chết sẽ bước đi!"',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng ra 5 token item hình ngũ giác để tượng trưng cho các Torch.\nThiết lập thanh Lượt/Sát thương ở mức 0 để theo dõi số lần trúng Torch.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã hồi sinh Frankenstein\'s Monster và điều khiển nó giết tất cả các bạn. Con Monster rất khỏe, nên hãy tránh nó ra. Điểm yếu duy nhất của nó: lửa.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Con Monster đã chết.',
      },
      {
        heading: 'Cách Giết Con Monster',
        body: 'Hai cách:\n1. Chết Bởi Lửa: Đến Charred Room, Furnace Room, Pentagram Room, hoặc Kitchen để tìm và thắp một bó đuốc (đặt một token Torch lên thẻ của bạn; chỉ mang một cái một lúc, không giới hạn tổng số). Ở phòng của con Monster hoặc phòng kề bên có cửa thông nhau, thử đòn tấn công Speed để ném Torch. Đánh bại con Monster thì tính một lần trúng Torch: tiến thanh Lượt/Sát thương lên 1 và bỏ Torch đi (đòn này không làm nó choáng). Nếu nó đánh bại bạn, bạn mất Torch. Mỗi anh hùng ném một Torch mỗi lượt. Con Monster bị giết khi trúng số Torch bằng số người chơi.\n2. Chết Bởi Rơi: Con Monster luôn phải di chuyển về phía nhà thám hiểm gần nhất mà nó có thể tấn công. Dụ nó vào Tower hoặc Chasm, rồi thử đổ Might 6+ ở đó để đẩy nó rơi xuống chết (mỗi lượt một lần).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn ném cuốn sách vào ngọn nến, từng trang một - một sự ghê tởm đích thực. Rồi một thứ ánh sáng rực rỡ, đơn giản lóe lên trong bạn, làm bạn choáng ngợp trước những khả năng của cuốn sách. Thật lạ lùng khi chỉ riêng bạn lại khám phá ra một bí mật kinh ngạc đến vậy. Bạn bị bỏng ngón tay một chút khi dập tắt trang giấy đang cháy.',
      },
    ],
    monsters: [],
  },

  30: {
    id: 30,
    title: 'Lăng Mộ Của Dracula',
    intro:
      'Một nỗi chắc chắn buồn nôn siết chặt dạ dày bạn khi nắp quan tài cọt kẹt mở ra. Một bàn tay nhợt nhạt đẩy nó ra - thô ráp, to bè, lông trên lòng bàn tay, móng cắt thành đầu nhọn. "Chúng ta phải giết nó," bạn hét lên, "trước khi nó tỉnh dậy hoàn toàn!" Đó là lúc bạn thấy những vết cắn mới trên cổ người bạn và những chiếc răng nanh mới trong miệng người bạn.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội và cô Girl (giờ là Bride) đều là Vampire liên minh với Dracula. Dracula rất mạnh nhưng tỉnh dậy chậm - bạn có vài lượt để hành động trước khi hắn hoàn toàn tỉnh táo. Hắn và lũ tay sai sẽ cố giết bạn hoặc biến bạn thành Vampire.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Cả Dracula và Bride đều đã bị tiêu diệt.',
      },
      {
        heading: 'Cách Tiêu Diệt Vampire',
        body: 'Dùng chiếc Spear để đánh bại một Vampire bằng đòn tấn công Might sẽ đâm cọc vào tim nó và giết nó. Mọi đòn tấn công thành công khác gây sát thương lên kẻ phản bội, hoặc làm Count Dracula và Bride choáng.\nKẻ phản bội theo dõi số lượt. Ngay sau khi kẻ phản bội tiến thanh Lượt/Sát thương, một nhà thám hiểm khác đổ số xúc xắc bằng số người chơi; khi kết quả thấp hơn số lượt hiện tại, mặt trời mọc.\nVampire yếu dần khi ngày trôi qua. Đầu mỗi lượt của kẻ phản bội sau khi mặt trời mọc, mỗi Vampire (Dracula, Bride, kẻ phản bội) mất 1 ở mỗi chỉ số. Nếu một chỉ số của Vampire tụt xuống 0 hoặc đầu lâu, nó bốc cháy và bị tiêu diệt.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Đánh bại một Vampire gây sát thương bình thường. Nếu bạn cũng mang Holy Symbol, bạn có thể đẩy Vampire đó ra xa 1 phòng khỏi bạn (qua cửa thông nhau) cho mỗi điểm sát thương bạn gây ra.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Một chiếc cọc xuyên tim, ánh sáng mặt trời - đó là vũ khí của bạn chống lại tai họa hút máu và lũ con đi đêm của nó. Ngày đã đến. Lũ vampire bị tiêu diệt. Chúng thực sự đã biến mất, bạn nghĩ vậy, vô thức xoa một vết thương trên cổ. Tốt hơn nên đi khám cái này, phòng khi thôi.',
      },
    ],
    monsters: [],
  },

  31: {
    id: 31,
    title: 'Trên Không Trung',
    intro:
      'Một tiếng thét chói tai làm bạn choáng váng; căn nhà gập lại và giật mạnh lên không trung. Một con chim to cỡ chiếc 747 đang quắp căn nhà trong móng vuốt. Nếu muốn sống, bạn cần thoát ra nhanh - nhưng bạn cần cách nào đó để sống sót qua cú rơi. Bạn nhớ ra những chiếc dù mà ai đó từng vô tình tìm thấy. Có thể không đủ cho tất cả mọi người.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng ra số token item hình ngũ giác bằng một nửa số người chơi (làm tròn xuống); đây là các Parachute.\nGỡ bỏ mọi ô tầng hầm. Đặt bất kỳ nhà thám hiểm nào ở tầng hầm vào Mystic Elevator bên cạnh một cửa tầng trệt (lục chồng phòng để tìm nó nếu cần, đặt nó ở tầng trệt hoặc tầng trên), rồi xáo bài.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Haunt này không có kẻ phản bội - chỉ có anh hùng. Dù vậy, chỉ một số người trong các bạn có thể sống sót.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn thoát khỏi căn nhà với một Parachute. Những anh hùng không tìm được Parachute sẽ bị giết.',
      },
      {
        heading: 'Tìm Một Parachute',
        body: 'Anh hùng vẫn có thể thám hiểm nhưng không thể vào tầng hầm (nếu ô tiếp theo chỉ có thể đặt ở tầng hầm, bỏ nó đi và rút tiếp đến khi đặt được một ô).\nTìm một Parachute bằng cách đổ Knowledge hoặc Speed 4+ ở bất kỳ phòng nào có biểu tượng omen; nếu thành công đặt một token Parachute lên thẻ của bạn. Mỗi phòng chỉ có một Parachute.\nBạn không thể di chuyển thêm trong lượt mà bạn tìm thấy hoặc cướp được một Parachute, và chỉ mang được một cái.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Cướp một Parachute bằng cách tấn công với Might (kháng lại bằng Might) hoặc lừa với Knowledge (kháng lại bằng Knowledge). Bạn lấy được nó nếu thắng từ 1 trở lên; người thua không nhận sát thương; lượt của bạn kết thúc dù có thành công hay không.\nBạn có thể tấn công anh hùng để gây sát thương thay vì vậy, theo luật thông thường. Một anh hùng đã chết đang mang Parachute sẽ làm rơi nó cho bất kỳ ai nhặt.\nCác anh hùng làm chậm lẫn nhau như thể họ là quái vật.',
      },
      {
        heading: 'Thoát Khỏi Căn Nhà',
        body: 'Với một Parachute, di chuyển đến Entrance Hall, Balcony, Tower, Coal Chute, hoặc Collapsed Room và tốn 1 ô. Rồi đổ Knowledge hoặc Sanity 4+; nếu thành công bạn thoát ra an toàn.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Không khí lao qua như một cơn bão; dù của bạn bung ra và cú rơi chậm lại. Rồi bạn nghe tiếng phần phật - vải rách, dây rối. Có lẽ chiếc dù bị hỏng trong lúc giao tranh, nhưng hiện giờ có vẻ ổn. Các vết rách không to thêm. Chưa, dù sao thì...',
      },
      {
        heading: 'Nếu Bạn Thua',
        body: 'Cái gọi là bạn bè của bạn đã bỏ mặc bạn làm thức ăn cho lũ chim non của con chim săn mồi ma quỷ này. Mặt khác, có lẽ nếu bạn đáp xuống một thân người khác, bạn sẽ sống sót qua cú rơi. Người bạn đằng kia trông có vẻ khá êm...',
      },
    ],
    monsters: [],
  },

  32: {
    id: 32,
    title: 'Lạc Lối',
    intro:
      'Quả cầu pha lê lóe sáng và một hợp âm vang rền bùng nổ từ chiếc đại phong cầm. Căn nhà rung chuyển và dịch chuyển, thay đổi bố cục. Không khí đặc lại thành một làn sương xanh, ngọt khé, ăn mòn. Bên ngoài, bầu trời màu hoa cà và những người đi bộ có hơi nhiều răng hơn mức cần thiết. Tốt hơn nên đưa căn nhà về chiều không gian quê hương bạn trước khi quá nhiều da bị bỏng tan đi.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội là một sinh vật ngoài hành tinh đã chuyển căn nhà về chiều không gian quê hương của hắn. Bầu không khí ăn mòn sẽ từ từ giết bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn đưa căn nhà trở về chiều không gian của riêng mình.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Đầu mỗi lượt của mỗi anh hùng, đổ 2 xúc xắc; anh hùng đó trừ kết quả khỏi bất kỳ chỉ số nào hoặc tổ hợp chỉ số nào.',
      },
      {
        heading: 'Cách Đưa Căn Nhà Trở Về',
        body: 'Chiếc đại phong cầm trong Organ Room cũng là một thiết bị chuyển chiều không gian. Khi ở trong Organ Room, thử đổ Knowledge để chơi đúng bản nhạc (mỗi lượt một lần). Tổng cần đạt: 3 người chơi 15+; 4 người chơi 16+; 5 người chơi 18+; 6 người chơi 20+.\nNhững manh mối tìm được có lợi cho tất cả mọi người; cùng một manh mối không thể tìm thấy hai lần.\nCộng 1 cho mỗi phòng có biểu tượng omen trong nhà.\nCộng 2 nếu bạn có sở thích Music khi chơi.\nCộng 2 nếu bạn tìm thấy sách nhạc trong Library (Knowledge 5+ ở đó, mỗi lượt một lần).\nCộng 2 nếu bạn xem các con thú nhồi bông trong Game Room (Sanity 5+).\nCộng 2 nếu bạn định vị được hành tinh của mình từ Tower (Knowledge 5+).\nCộng 2 khi Madman đang ở trong Organ Room.\nCộng 2 khi Book đang ở trong Organ Room.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn gõ ra hợp âm cuối cùng; lần này âm thanh vang rền khắp căn nhà. Căn nhà rung chuyển và dịch chuyển; không khí trong trẻo lại và trở nên trong suốt. Bên ngoài trời tối. Cơn đau dịu đi, máu ngừng chảy. Bạn đã về lại chiều không gian của riêng mình. Nhưng bạn có đang ở hành tinh quê hương không? Điều đó vẫn còn phải xem.',
      },
    ],
    monsters: [],
  },

  33: {
    id: 33,
    title: 'Lời Triệu Hồi Bóng Tối',
    intro:
      'Kể từ khi mở cuốn sách, người bạn của bạn cười điên dại, lảm nhảm về một cánh cổng và "khoảng không giữa các vì sao." Anh ta rõ ràng đã điên - cách duy nhất để đưa anh ta trở lại tỉnh táo là phá hủy cuốn sách hắc ám anh ta đang mang.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu cả Chapel lẫn Pentagram Chamber đều không có trong cuộc chơi, người ngồi bên trái người lật haunt lục chồng phòng tìm một trong những ô đó và đặt nó vào một tầng hợp lệ (càng xa kẻ phản bội càng tốt), rồi xáo bài.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đang dùng Book để triệu hồi một Elder God gớm ghiếc sẽ nuốt chửng cả thế giới, bắt đầu từ bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn phá hủy Book. Bạn cũng thắng nếu bạn giết kẻ phản bội trước khi hắn hoàn thành nghi lễ triệu hồi.',
      },
      {
        heading: 'Cách Phá Hủy Book',
        body: 'Trước khi Elder God được triệu hồi, bạn có thể cướp Book từ kẻ phản bội.\nSau khi triệu hồi, Book nằm trong phòng nơi nghi lễ được thực hiện; nhặt nó lên như bình thường.\nMang Book đến Furnace hoặc Chasm, rồi tốn 1 ô di chuyển để ném nó vào, phá hủy nó và trục xuất Elder God.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn không chắc mình sẽ bao giờ hồi phục hoàn toàn khỏi những gì đã chứng kiến đêm nay. Có những điều con người Không Được Phép Biết, và chắc chắn đây là một trong số đó. Có lẽ bạn có thể tự thuyết phục mình rằng tất cả chỉ là một giấc mơ...',
      },
    ],
    monsters: [],
  },

  34: {
    id: 34,
    title: 'Máy Chém',
    intro:
      'Đầu bạn quay cuồng và bạn bất tỉnh. Bạn tỉnh dậy với một giọng nói được ghi âm: "Tôi muốn chơi một trò chơi. Cánh cửa sẽ mở sau một giờ nữa, nhưng không ai trong các người còn sống trừ khi giỏi tìm kiếm đồ vật. Mỗi người có một vòng cổ thép gắn lưỡi dao giữ bằng lò xo. Các chìa khóa đã được giấu khắp căn nhà. Cần hai chìa để mở mỗi vòng cổ. Trò chơi bắt đầu."',
    sections: [
      {
        heading: 'Điều Kẻ Phản Bội Nghe Thấy',
        body: '"Tất cả những người khác ở đây đều là nhân chứng của vụ tai nạn giao thông của mẹ ngươi. Xe của bà bốc cháy, nhưng họ quá sợ hãi để kéo thân thể bất tỉnh của bà ra trước khi bình xăng nổ. Giờ ngươi có cơ hội báo thù. Vòng cổ của ngươi không hoạt động, nhưng những người khác không biết điều đó. Liệu họ có đủ can đảm giúp ngươi như cách họ đã không giúp bà ấy không?"',
      },
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt các token item hình ngũ giác (Key) vào những phòng này, ngay bây giờ hoặc khi được khám phá: Attic, Catacombs, Chasm, Collapsed Room, Crypt, Furnace Room, Gallery, Junk Room, Operating Laboratory, Pentagram Chamber, Tower, Vault.\nLấy các token quái vật màu đỏ đánh số từ 1 đến số người chơi; trộn và chia úp một token cho mỗi người chơi. Nhà thám hiểm có token số 1 là kẻ phản bội.\nLấy các token item hình ngũ giác đánh số từ 1 đến số người chơi; người chơi giữ chúng ngửa lên.\nThiết lập thanh Lượt/Sát thương ở mức 0 (từ bốn người chơi trở xuống) hoặc 1 (năm hoặc sáu người chơi).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Haunt này dùng luật kẻ phản bội ẩn danh (trang 17). Tất cả các bạn đều đọc cuốn sách nhỏ này, nhưng một người trong các bạn là kẻ phản bội. Ai đó đã khóa bạn trong một vòng cổ có đồng hồ đếm ngược có khả năng chặt đầu bạn, và một trong những người đồng hành của bạn cho rằng bạn không đầu thì hơn. Kẻ phản bội chỉ phải lộ diện nếu nhà thám hiểm đó sắp bị giết bởi vòng cổ; trước đó hắn có thể thu thập và trao đổi Key để lấy lòng tin.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Các anh hùng thắng khi mọi vòng cổ đã được gỡ và ít nhất một nửa số anh hùng (làm tròn lên) còn sống. Nếu hơn một nửa số anh hùng bị giết, kẻ phản bội thắng. Một vòng cổ được gỡ khi nó được mở khóa hoặc kích nổ; nó cũng tính là đã gỡ nếu người đeo bị giết theo cách khác, hoặc nếu nó nằm trên một kẻ phản bội đã lộ diện hoặc đã chết.',
      },
      {
        heading: 'Cách Mở Khóa Một Vòng Cổ',
        body: 'Lấy một Key từ một phòng sau khi đã rút và xử lý mọi lá bài bắt buộc (lấy Key là tùy chọn).\nBạn không thể di chuyển sau khi tìm thấy một Key, nhưng có thể dùng nó hoặc đưa nó đi. Mỗi Key mở khóa một lần, rồi bị bỏ đi.\nVới ít nhất hai Key, thông báo vào bất kỳ lúc nào trong lượt của bạn rằng bạn đang mở khóa vòng cổ của chính mình hoặc của bất kỳ ai trong phòng bạn. (Bạn không thể được trao một Key và dùng nó để mở khóa vòng cổ của mình trong cùng một lượt.)\nKey không thể mở khóa vòng cổ của một nhà thám hiểm đã bị chặt đầu.\nThời điểm theo phòng - Crypt/Furnace Room: lấy Key sau khi nhận sát thương của phòng. Gallery: nhảy xuống Ballroom (phải có trong nhà). Collapsed Room: đổ để tránh rơi trước - thành công thì được Key, thất bại thì rơi xuống tầng hầm mà không có nó. Vault: nhà thám hiểm đầu tiên kết thúc lượt trong Vault đã mở sẽ được Key. Catacombs/Chasm/Tower: băng qua phòng thành công trước; thất bại thì thử lại lượt sau. Attic/Junk Room/Pentagram Chamber: thử đổ để rời ô đó - thất bại thì nhận sát thương mà không có Key. Operating Laboratory: phim X-quang cho thấy Key trong cơ thể bạn - đổ 3+ với mỗi chỉ số và nhận 2 xúc xắc sát thương vật chất; bất kỳ lần đổ thất bại nào nghĩa là không có Key nhưng bạn vẫn nhận sát thương.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Cuối mỗi lượt của người lật haunt, tiến thanh Lượt/Sát thương lên 1. Rồi mỗi nhà thám hiểm có token item đánh số bằng hoặc nhỏ hơn lượt hiện tại đổ 3 xúc xắc; nếu kết quả nhỏ hơn số lượt hiện tại, nhà thám hiểm đó bị giết ngay lập tức.',
      },
      {
        heading: 'Nếu Các Anh Hùng Thắng',
        body: 'Khi chiếc vòng cổ cuối cùng được tháo, các cánh cửa mở ra và một làn gió mát thổi qua sảnh. Nhưng ai đã làm điều này, và tại sao? Nếu có đủ người thích thú trò tra tấn ghê rợn, có lẽ sẽ có một phần tiếp theo hoặc năm...',
      },
      {
        heading: 'Nếu Kẻ Phản Bội Thắng',
        body: 'Khi nhìn những thi thể không đầu của những kẻ đã bỏ mặc mẹ bạn chết, bạn cảm thấy mình đã học được một bài học quý giá về cuộc sống. Kẻ làm điều này hẳn phải là một người thầy đạo đức thâm sâu nào đó. Hoặc là vậy, hoặc cả hai các người chỉ đơn giản là điên. Ai biết được?',
      },
    ],
    monsters: [],
  },

  35: {
    id: 35,
    title: 'Thu Nhỏ',
    intro:
      'Vài con mèo mướp cứ rình mò quanh đây. Một lọ thủy tinh vỡ tan; chất lỏng màu bạc biến thành một đám mây lấp lánh vây quanh bạn. Khi đầu óc bạn tỉnh táo lại, mặt ghế ngồi cao hàng dặm phía trên bạn - bạn chỉ còn cỡ một con chuột. Rồi bạn nghe thấy nó bên ngoài phòng: "...meo..."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng ra một token item hình ngũ giác để tượng trưng cho Toy Airplane.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã thu nhỏ bạn và thả lũ Cat vào nhà. Chúng sẽ cố ăn thịt bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Ít nhất một nửa số anh hùng (làm tròn lên) dùng Toy Airplane để trốn thoát qua Balcony, Gardens, Graveyard, Patio, Tower, hoặc bất kỳ phòng nào có cửa sổ hướng ra ngoài.',
      },
      {
        heading: 'Khi Bị Thu Nhỏ',
        body: 'Item và omen bạn mang theo cũng thu nhỏ cùng bạn và hoạt động bình thường.\nBạn không thể rút bài; khám phá một phòng có biểu tượng sẽ kết thúc lượt của bạn.\nMỗi ngưỡng cửa tính là một ô (vào phòng tiếp theo tốn 2); bạn có thể dừng ở ngưỡng cửa.\nĐổ Might 3+ để lên hoặc xuống cầu thang (thất bại kết thúc lượt của bạn, thử lại lượt sau).\nBạn không thể dùng Collapsed Room hoặc Mystic Elevator, và không bị ảnh hưởng bởi Gallery, Gymnasium, hoặc Vault.\nBạn cần Toy Airplane để rời căn nhà.',
      },
      {
        heading: 'Cách Sử Dụng Toy Airplane',
        body: 'Toy Airplane nằm trong Bedroom, Master Bedroom, Storeroom, Attic, hoặc Game Room. Đổ Knowledge 3+ mỗi lượt một lần để tìm một trong những phòng đó; nếu thành công đặt token vào đó.\nĐổ Knowledge 4+ mỗi lượt một lần để khởi động nó; nó đậu yên cho đến lượt tiếp theo của bạn, trong thời gian đó các anh hùng có thể lên máy bay (nhưng có thể bị Cat tấn công).\nTốc độ bay là 5; anh hùng đã khởi động nó sẽ di chuyển nó trong các lượt sau với tốc độ đó thay cho di chuyển bình thường, tính ngưỡng cửa là các ô riêng biệt.\nĐón một anh hùng đang ở dưới đất tốn 1 ô; anh hùng có Speed cao nhất trên máy bay đổ Speed: 4+ đón được họ; 2-3 thất bại nhưng thử lại (tốn thêm một ô); 0-1 rơi (máy bay đậu xuống, khởi động lại).\nBạn không thể rời đi cho đến khi tất cả các anh hùng còn sống được đón lên; tốn 1 ô để thoát qua cạnh hướng ra ngoài của một phòng.\nAnh hùng đang bay chỉ tấn công hoặc bị tấn công bằng Revolver, Ring, hoặc Dynamite; họ không đổ cho cầu thang và đi qua tự do Collapsed Room, Gallery, và băng qua Chasm.\nKẻ phản bội không thể lái Toy Airplane.',
      },
      {
        heading: 'Nếu Một Con Cat Bắt Được Bạn',
        body: 'Nếu bị bắt, đầu lượt tiếp theo của bạn chọn bất kỳ chỉ số nào; bạn và con Cat mỗi bên đổ chỉ số đó (một cuộc đấu). Đổ cao hơn thì bạn thoát ra và hành động bình thường; nếu không bạn vẫn bị bắt và lượt của bạn kết thúc.\nNếu một anh hùng khác đánh bại con Cat, nó thả bạn ra và bị choáng.\nAnh hùng bị mèo bắt không thể được Toy Airplane đón.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Chiếc máy bay nhỏ phun phì phì, rồi lượn ra khỏi cửa sổ. Bạn nghe một tiếng gào thất vọng khi bạn bay vút khỏi lũ mèo hung dữ. Bạn đã thoát! Giờ tất cả những gì bạn phải làm là tìm cách trở lại kích thước cũ trước khi một con diều hâu nào đó quyết định biến bạn thành bữa ăn...',
      },
    ],
    monsters: [],
  },

  36: {
    id: 36,
    title: 'Vui Hơn Khi Có Bạn Bè',
    intro:
      'Chiếc huy chương phát sáng màu xanh đen khi nước tràn vào tầng hầm. Chẳng phải ai đó đã nhắc đến một chiếc thuyền trên gác mái sao? Tất cả các bạn chạy lên lầu - trừ kẻ đã đưa bạn đến đây. Căn nhà đang chìm! Bạn không có thời gian tìm hiểu vì sao, nhưng có thể bạn có đủ thời gian để trốn thoát.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội dụ bạn đến đây để chết. Căn nhà đang chìm vào một đầm lầy ngầm dưới lòng đất, và bạn sẽ chết đuối trừ khi trốn thoát.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Ít nhất một nửa số anh hùng đã bắt đầu haunt (làm tròn lên) thoát khỏi căn nhà còn sống. Bạn không thể bỏ lại bất kỳ anh hùng còn sống nào khi trốn thoát.',
      },
      {
        heading: 'Cách Thoát Khỏi Căn Nhà',
        body: 'Rowboat nằm trong Attic (thám hiểm tầng trên để tìm nó nếu cần).\nNhặt Rowboat lên và mang nó từ Attic đến Balcony hoặc Tower (token trên thẻ của bạn). Nó nặng: mỗi phòng đi vào tốn 2 ô. Chỉ một anh hùng mang nó (có thể trao đổi); Dog không thể mang nó.\nNgay khi tất cả các anh hùng còn sống đều ở Balcony hoặc Tower cùng với Rowboat, bạn trốn thoát. Bạn không thể trốn thoát khi vẫn còn anh hùng còn sống trong nhà.',
      },
      {
        heading: 'Ảnh Hưởng Của Ngập Nước',
        body: 'Nếu bất kỳ nhà thám hiểm nào (kể cả kẻ phản bội) bắt đầu lượt ở một tầng bị ngập:\nNgập Một Phần: di chuyển ít hơn 2 ô.\nNgập Hoàn Toàn: di chuyển ít hơn 4 ô và nhận 2 sát thương vật chất (không thể ngăn hoặc giảm).\nDù ngập đến đâu, bạn luôn có thể di chuyển ít nhất 1 ô.',
      },
      {
        heading: 'Làm Chậm Nước Lũ',
        body: 'Kẻ phản bội đánh dấu thời gian trên thanh Lượt/Sát thương. Trong lượt của bạn, bạn có thể thả Medallion vào một phòng ngập một phần hoặc ngập hoàn toàn để dừng việc chìm trong một lượt; bỏ lá đó đi, và kẻ phản bội không tiến thanh trong lượt tiếp theo của kẻ phản bội.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Chèo hết sức, bạn đưa chiếc thuyền ra xa căn nhà đang chìm. Người bạn của bạn gào theo: "Quay lại! Cái chết vui hơn khi có bạn bè! Hãy chia sẻ nó với tôi!" Hừm. Đó là một lời mời hiếu khách mà bạn nên từ chối.',
      },
    ],
    monsters: [],
  },

  37: {
    id: 37,
    title: 'Chiếu Tướng',
    intro:
      'Bạn giải mã nhật ký của Ebenezer Slocum: "Ta đã tìm ra cách buộc chính Tử Thần phải hiện ra trước mặt ta. Ta sẽ đánh bại nó!" Một thi thể gục trên bàn cờ vỡ vụn thành bụi khi bạn chạm vào. Bên kia bàn, một bóng tối đen mờ hiện ra và vẫy tay về phía bộ cờ giữa hai người. Bạn hy vọng mình giỏi hơn Ebenezer.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Tử Thần đã thách bạn một ván cờ. Nếu không có ai trong phòng để chơi với Tử Thần vào đầu lượt quái vật, các anh hùng bỏ cuộc và thua.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn chiếu tướng Tử Thần bằng cách đổ Knowledge ra kết quả cao hơn nó. Mỗi lượt của Tử Thần một lần, một anh hùng ở cùng phòng có thể thử lần đổ này.',
      },
      {
        heading: 'Cách Đánh Bại Tử Thần',
        body: 'Anh hùng có thể nhặt các token Holy Seal; với một token, thử đổ Sanity 4+ để phá vỡ nó (mỗi lượt một lần). Mỗi Seal bị phá vỡ làm Tử Thần đổ ít hơn 1 xúc xắc trong các lần đổ Knowledge sau (ít hơn 2 khi chỉ có ba hoặc bốn người chơi).\nBook chứa các chiến thuật cờ: nếu anh hùng đang chơi cờ mang nó, cộng thêm 1 xúc xắc (tối đa 8) vào các lần đổ Knowledge.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Tử Thần không thể tấn công hoặc bị tác động bằng bất kỳ cách nào khác ngoài việc bị đánh bại trong cờ.\nTử Thần không làm chậm di chuyển của anh hùng.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: '"Chiếu tướng." Tử Thần nhìn chằm chằm vào Vua của nó, rồi vỡ vụn thành bụi. Tử Thần mỉm cười, và bạn cảm thấy tóc mình bạc trắng. "Hẹn lần sau," Tử Thần đáp lại.',
      },
    ],
    monsters: [],
  },

  38: {
    id: 38,
    title: 'Quái Thú Địa Ngục',
    intro:
      'Khóe mắt bạn thoáng thấy những vệt đỏ bay vụt qua. Quay lại, bạn thấy một con dơi đang vỗ cánh, thân và cánh nổ lép bép lửa, lượn quanh bạn, hơi nóng làm cháy xém tóc bạn. Một người bạn cười khoái trá trong khi những người khác la hét kinh hoàng. Cái này chẳng lành chút nào.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội điều khiển một bầy Firebat và muốn tất cả các bạn chết. Firebat không thể tấn công bạn, nhưng chúng sẽ thiêu đốt bạn nếu bạn ở lại trong phòng với chúng.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn thực hiện thành công một lễ trừ tà để đuổi Firebat khỏi căn nhà.',
      },
      {
        heading: 'Cách Thực Hiện Lễ Trừ Tà',
        body: 'Lễ trừ tà cần số lần đổ trừ tà thành công bằng số người chơi. Mỗi lượt chỉ một lần.\nĐổ Sanity 5+ trong Chapel, Crypt, hoặc Pentagram Chamber, hoặc khi mang Holy Symbol hoặc Ring.\nĐổ Knowledge 5+ trong Library hoặc Research Laboratory, hoặc khi mang Book hoặc Crystal Ball.\nMỗi lần thành công đặt token chỉ số tương ứng lên ô phòng hoặc lá item đã dùng. Một khi đã dùng, một item hoặc phòng không thể dùng lại. Khi số token đặt được bằng số người chơi, lũ Firebat bị trục xuất.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Firebat không thể tấn công hoặc bị tấn công.\nFirebat không làm chậm anh hùng di chuyển qua phòng của chúng.\nKẻ phản bội cho bạn biết bạn nhận bao nhiêu sát thương khi ở trong phòng có một hoặc nhiều token Firebat.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Lũ dơi đã biến mất, trở về bất kỳ địa ngục nào đã sinh ra chúng. Căn nhà vẫn âm ỉ cháy, và mùi thịt cháy làm dạ dày bạn quặn lại. Bạn lảo đảo rời khỏi dinh thự, thề không bao giờ quay lại. Nếu lũ quái thú địa ngục tìm được đường trở lại, bạn không muốn ở quanh đây để chứng kiến.',
      },
    ],
    monsters: [],
  },

  39: {
    id: 39,
    title: 'Người Thừa Kế',
    intro:
      'Bạn tình cờ đọc được một câu chuyện: dòng họ Romanescu, một gia tộc hoàng gia cổ xưa, đã có cuộc chiến cuối cùng trong căn nhà này. Nghiên cứu phả hệ của họ, bạn nhận ra một người trong các bạn là người thừa kế gia sản Romanescu - nếu người thừa kế đích thực ngồi lên ngai vàng tại đây, gia sản sẽ được khôi phục. Rồi bạn nhận ra một người bạn đang mất tích, người đã lẩm bẩm về việc "giải quyết nốt một đầu mối còn dang dở."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Người lật haunt bí mật chọn một anh hùng khác làm người thừa kế, viết tên nhân vật đó lên giấy, và cho các anh hùng khác xem. Nếu người thừa kế chết, kẻ phản bội thắng, nên hãy giữ bí mật danh tính của người thừa kế.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã rải khắp căn nhà những Assassin ẩn náu.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Người thừa kế ngồi lên ngai vàng khi đang mang cả Spear lẫn Ring. Ngai vàng nằm ở Statuary Corridor; ngay khi người thừa kế vào phòng đó với cả hai item, bạn thắng.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Khi người thừa kế an tọa trên ngai vàng, ánh đèn mờ đi, rồi sáng rực hơn bao giờ hết. Chiếc nhẫn trở thành vương miện, ngọn giáo trở thành một chiếc chìa khóa cũ. Người thừa kế mỉm cười. "Ta biết... tất cả. Đến đây, để ta đưa các ngươi đến kho báu của gia tộc ta. Ta muốn ban thưởng cho bạn bè và những người hộ vệ mới của ta."',
      },
    ],
    monsters: [],
  },

  40: {
    id: 40,
    title: 'Bị Chôn Sống',
    intro:
      'Bàn cầu cơ trượt qua lại trên các chữ cái mà không có ai trợ giúp, đánh vần ra: B Ị C H Ô N S Ố N G. Nhìn quanh, bạn nhận ra mình chưa thấy một trong những người bạn từ khi vào đây - một thứ phép thuật quái dị đã ngăn bạn nhớ ra. Nếu người bạn của bạn thực sự bị chôn sống, bạn phải tìm người đó ngay bây giờ.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng ra số token Might Roll hình tam giác bằng số người chơi.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã chôn một người bạn (không phải người chơi) trong một phòng tầng hầm (bí mật ghi lại). Bạn không biết phòng nào, nhưng bạn biết nó đã có trong nhà khi haunt bắt đầu.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tìm thấy và đào người bị chôn lên trước khi người đó chết. Spirit Board sẽ giúp bạn.',
      },
      {
        heading: 'Cách Giải Cứu Người Bạn Của Bạn',
        body: 'Mỗi khi bạn di chuyển vào một phòng, thử đổ Knowledge 3+ để tìm kiếm nó; nếu thành công, hỏi kẻ phản bội xem đây có phải phòng chôn không (hắn trả lời thật). Chỉ tìm kiếm một phòng mỗi lượt.\nMột khi đã tìm thấy, thử đổ Might 4+ trong phòng chôn để đào (mỗi lượt một lần); mỗi lần thành công đặt một token Might Roll vào đó. Các anh hùng cần số lần đổ Might thành công bằng số người chơi để cứu người bị chôn.',
      },
      {
        heading: 'Spirit Board',
        body: 'Một khi haunt bắt đầu, bạn không thể dùng Spirit Board để xem ô phòng trên cùng; thay vào đó dùng nó để tìm người bị chôn.\nAnh hùng giữ Spirit Board không thể tự nguyện đưa, trao đổi, hoặc thả nó; nếu anh hùng đó chết, nó rơi xuống cùng các item của họ cho bất kỳ ai nhặt.\nDùng nó mỗi lượt một lần cho đến khi tìm thấy phòng chôn, rồi bỏ lá đó đi.\nDùng nó kết thúc di chuyển và các hành động khác trong lượt đó. Thử đổ Sanity và tra cứu: 0-2 không có gì; 3-4 di chuyển bất kỳ nhà thám hiểm nào 3 ô; 5-6 chữa lành cho người bị chôn (đổ 2 xúc xắc; kẻ phản bội trừ kết quả khỏi tổng sát thương của người bị chôn); 7+ kẻ phản bội phải thông báo phòng chôn.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Đào điên cuồng, bạn giải thoát người bạn bị mắc kẹt. Móng tay cô ấy nứt toác vì cào vào chiếc quan tài gỗ, máu chảy xuống đôi tay run rẩy. Cô ấy chưa thốt ra một âm thanh nào kể từ khi được giải thoát. Từ từ bạn đỡ cô ấy ra, tin chắc rằng với sự chăm sóc đúng cách cô ấy sẽ khỏe lại như cũ... vào một ngày nào đó.',
      },
    ],
    monsters: [],
  },

  41: {
    id: 41,
    title: 'Kẻ Phản Bội Vô Hình',
    intro:
      'Bạn nghe một người đồng hành thì thầm một từ kỳ lạ... rồi hét lên, một âm thanh ghê rợn hơn bất kỳ sinh vật sống nào. Bạn vội chạy đến, nhưng chỉ có một mình. Rồi một tiếng lê bước và một tiếng cười lạnh lùng, gay gắt. Bạn có một cảm giác kinh khủng rằng một trong những người bạn của bạn đã hóa thành kẻ thù.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã hóa vô hình và quyết định giết tất cả các bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Kẻ phản bội đã chết.',
      },
      {
        heading: 'Chiến Đấu Trong Bóng Tối',
        body: 'Nếu một anh hùng sống sót qua đòn tấn công của kẻ phản bội, anh hùng đó có thể thử đổ Knowledge vào cuối lượt của kẻ phản bội: 0-2 không gì cả; 3-4 bạn biết kẻ phản bội còn ở trong phòng không (và hắn đã dùng lối ra nào nếu hắn rời đi); 5+ bạn biết kẻ phản bội đang ở phòng nào.\nMỗi lượt một lần bạn có thể thử tấn công kẻ phản bội vô hình; nếu kẻ phản bội ở trong phòng bạn thì bạn đánh nhau bình thường, nếu không bạn thất bại và không thể tấn công lại trong lượt đó.\nBắn Revolver hoặc ném Dynamite vào phòng của kẻ phản bội thì xử lý bình thường.',
      },
      {
        heading: 'Skull Và Spirit Board',
        body: 'Đầu lượt của bạn, khi mang Skull, đổ Sanity 4+ để truy dấu kẻ phản bội: nếu thành công hắn cho bạn biết hắn đang ở tầng nào.\nĐầu lượt của bạn, khi mang Spirit Board, đổ Knowledge 4+ để truy dấu kẻ phản bội: nếu thành công hắn cho bạn biết phòng của hắn có biểu tượng gì, nếu có.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Kẻ phản bội nằm chết, thân thể giờ đã hiện hình khi cái ác đã rời khỏi nó. Cô ấy trông không quá khủng khiếp khi bạn thực sự nhìn thấy được. Bạn không biết vì sao người bạn của mình quay lại chống bạn - bạn chỉ hy vọng thứ gây ra điều đó sẽ không đưa cô ấy trở lại dưới một hình dạng khác, thậm chí còn gớm ghiếc hơn...',
      },
    ],
    monsters: [],
  },

  42: {
    id: 42,
    title: 'Người Hùng Xuất Hiện',
    intro:
      'Một bức tượng đứng trước mặt bạn, bàn tay đưa ra như khẩn cầu bạn đặt thứ gì đó vào đó. Một dòng chữ được khắc trên bệ: "Để Đánh Bại Kẻ Bất Khả Chiến Bại." Có gì đó vừa trở nên rất sai, và bức tượng này có thể là cách duy nhất của bạn để ngăn mọi chuyện đi từ tệ đến tệ hơn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Đặt một token item hình ngũ giác (Statue) vào phòng nơi haunt được lật.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Một kẻ phản bội bất khả chiến bại đang dùng một nghi lễ để mở một cánh cổng đến Địa Ngục. Bạn nghi ngờ nó liên quan đến tế người.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Kẻ phản bội đã chết.',
      },
      {
        heading: 'Cách Giết Kẻ Phản Bội',
        body: 'Kẻ phản bội không thể bị tấn công hoặc làm tổn hại bằng cách thông thường. Đặt một item phù hợp vào tay Statue trong lượt của bạn; item bị bỏ đi và Statue cử động, giữ nguyên hình dạng đó suốt phần còn lại của ván chơi (cho kẻ phản bội biết là hình dạng nào): Holy Symbol → Judge; Axe → Warrior; Crystal Ball → Seer; Book → Wizard.\nStatue không di chuyển bình thường; mỗi lượt một lần, một anh hùng trong phòng của nó đổ Knowledge hoặc Sanity để di chuyển nó lên đến số ô bằng kết quả.\nKhi Statue ở trong phòng của kẻ phản bội nó không tấn công; thay vào đó, đầu lượt của kẻ phản bội nó hạ một chỉ số đi 1: Judge → Speed; Warrior → Might; Seer → Sanity; Wizard → Knowledge.\nNếu kẻ phản bội đánh bại Statue, nó không bị choáng nhưng không thể hạ một chỉ số trong lượt tiếp theo; nó vẫn có thể được di chuyển để bám theo kẻ phản bội.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bức tượng chiến đấu như thể đang bảo vệ cả thế giới. Kẻ phản bội nằm bị đánh bại, và bạn đứng kinh ngạc trước sức mạnh của bức tượng. Giờ nó ngồi đó, nắm đấm tì trầm tư vào cằm. Không có dòng chữ nào hiện ra bên dưới nó. Tất cả tĩnh lặng.',
      },
    ],
    monsters: [
      { name: 'Animated Statue', stats: 'Speed 8 · Might 8 · Sanity 8 · Knowledge 8' },
    ],
  },

  43: {
    id: 43,
    title: 'Bệnh Dịch Từ Sao',
    intro:
      'Bên cạnh ngọn giáo bạn tìm thấy một mẩu giấy: "Kể từ khi tôi chạm vào thiên thạch đó, tôi có thể cảm nhận sự biến đổi diễn ra trong mình - một chuỗi DNA méo mó chưa từng đến từ thế giới này. Tôi đã nghe thấy những sinh vật trong máu mình, nói với tôi rằng chúng có thể tận dụng cơ thể tôi tốt hơn nhiều. Bạn sẽ nhận ra nó qua ba giai đoạn: đầu tiên là cơn sốt độc hại, rồi các bào tử chiếm lấy tâm trí vật chủ, và ở giai đoạn ba... nỗi kinh hoàng." Ôi không - bạn đã thấy nghẹt mũi kể từ khi đến đây.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Lấy các token quái vật nhỏ cùng một màu đánh số từ 1 đến gấp đôi số nhà thám hiểm; trộn chúng lại. Mỗi người chơi lấy hai token và xem nhưng không lộ ra. Ai có token 1 là kẻ phản bội (có thể xuất hiện thêm sau; bạn vẫn là kẻ phản bội ngay cả khi mất token 1).\nNếu Research Laboratory không có trong nhà, người lật haunt lục chồng phòng tìm nó và đặt nó hợp lệ, rồi xáo bài.\nThiết lập thanh Lượt/Sát thương ở mức 1.\nĐể riêng ra một chồng token Knowledge Roll hình tam giác và một token item hình ngũ giác (Serum).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Haunt này dùng luật kẻ phản bội ẩn danh (trang 17). Một người trong các bạn là kẻ phản bội, bị nhiễm một loại virus ngoài hành tinh, tìm cách biến những người còn lại thành Alien. Bất kỳ ai giữ token kẻ phản bội đều không thể lộ nó vào bất kỳ lúc nào.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Các anh hùng thắng khi họ tạo ra Serum và mọi nhà thám hiểm còn sống đều được tiêm chủng. Nếu tất cả nhà thám hiểm đã chết hoặc trở thành kẻ phản bội/Alien, kẻ phản bội thắng; nếu kẻ phản bội thắng, người trở thành kẻ phản bội gần đây nhất sẽ thua thay vào đó.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Lần đầu tiên mỗi lượt bạn ở chung phòng với một nhà thám hiểm khác, mỗi bên đưa cho nhau một token quái vật úp ngẫu nhiên. Với nhiều nhà thám hiểm, chỉ trao đổi với một người (tốt nhất là người chưa từng trao đổi). Chỉ một lần trao đổi mỗi lượt. Nếu bạn nhận token 1, bạn vĩnh viễn trở thành kẻ phản bội, ngay cả khi sau đó bạn trao đổi nó đi.',
      },
      {
        heading: 'Người Lật Haunt Phải Làm Điều Này',
        body: 'Cuối lượt của người lật haunt mỗi vòng, tiến thanh Lượt/Sát thương. Rồi đổ số xúc xắc bằng số lượt: một đòn tấn công Might nhắm vào mọi nhà thám hiểm trong nhà (kháng lại bằng Might). Kẻ phản bội không miễn nhiễm - căn bệnh chống lại hệ miễn dịch của tất cả mọi người. Không giới hạn trên về số xúc xắc.',
      },
      {
        heading: 'Tạo Ra Serum',
        body: 'Mỗi lượt một lần trong Research Laboratory, đổ Knowledge 5+ (+1 xúc xắc cho mỗi nhà thám hiểm khác trong phòng, +1 nếu có Book). Nếu thành công đặt một token Knowledge Roll vào phòng.\nTìm thảo dược trong Conservatory hoặc Gardens: cuối lượt khi ở đó, đổ Knowledge 3+; nếu thành công lấy một token Knowledge Roll (thảo dược) lên thẻ của bạn. Thảo dược giống như item (có thể thả, trao đổi, cướp); bạn có thể mang nhiều hơn một và tìm kiếm mỗi lượt.\nTạo Serum cần số token Knowledge Roll trong Research Laboratory bằng số nhà thám hiểm - ít nhất một cái khám phá được trong phòng lab và ít nhất một cái từ thảo dược. Ai mang token cuối cùng đến sẽ lấy Serum.\nKhi mang Serum, tiêm cho chính mình hoặc một nhà thám hiểm tự nguyện trong phòng bạn với 1 ô di chuyển. Một người không phải kẻ phản bội được tiêm sẽ ngừng trao đổi token và không còn bị căn bệnh tấn công; các chỉ số dưới mức ban đầu được khôi phục về giá trị ban đầu.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Tất cả các nhà thám hiểm có thể tấn công lẫn nhau.\nNếu một kẻ phản bội chết theo cách khác ngoài tiêm Serum, người chơi đó thông báo và bắt đầu một quá trình biến đổi giai đoạn ba: bỏ qua lượt tiếp theo, rồi trở thành Alien (thả mọi item và token).\nAlien không bị căn bệnh ảnh hưởng và không thể trao đổi hoặc nhận token; chúng được coi là quái vật về di chuyển và sát thương.\nKhi mang Serum, bạn có thể tiêm cho một nhà thám hiểm không tự nguyện hoặc một Alien bằng cách đánh bại nó trong cận chiến vật chất dùng Speed - điều này giết kẻ phản bội hoặc Alien (một kẻ phản bội bị tiêm sẽ bị giết vĩnh viễn, không biến thành Alien).\nKhi mang Serum ở cùng phòng với một kẻ phản bội đang biến đổi, tiêm cho hắn với 1 ô di chuyển để giết hắn vĩnh viễn.',
      },
      {
        heading: 'Nếu Các Anh Hùng Thắng',
        body: 'Những người bạn nhiễm bệnh của bạn trông giống hệt chính họ, nhưng vẫn... khác. Khi bước ra thế giới, bạn biết rằng từ nay mình sẽ nhìn kỹ tất cả những người mình gặp - tìm kiếm những dấu hiệu...',
      },
      {
        heading: 'Nếu Kẻ Phản Bội Thắng',
        body: 'Bạn nghe nói có hàng tỷ dạng sống như thế này trên hành tinh này! Đã đến lúc tìm một trung tâm dân cư lớn và bắt đầu sinh sôi một cách nghiêm túc.',
      },
    ],
    monsters: [{ name: 'Aliens', stats: 'Speed 4 · Might 6 · Sanity 4' }],
  },

  44: {
    id: 44,
    title: 'Cái Chết Tìm Đến Tất Cả',
    intro:
      'Kể từ khi bước vào, bạn cảm thấy khác lạ - mệt mỏi, run rẩy, gần như già nua. Lau bụi khỏi một tấm gương, bạn nhìn chằm chằm vào những nếp nhăn mới sâu hoắm trên mặt, mái tóc phai màu, đôi vai chùng xuống. Bạn đang già đi còn tệ hơn cả căn nhà cũ kỹ kinh khủng này. Tốt hơn nên tìm cách ngăn chặn điều này trước khi bạn mất đi tuổi trẻ... hoặc mạng sống.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng ra 5 token Sanity Roll hình tam giác và 5 token Knowledge Roll hình tam giác.\nĐể riêng ra một số token item hình ngũ giác; chúng trở thành các token lão hóa.\nMỗi anh hùng (kể cả người giữ Medallion) đặt một token lão hóa lên thẻ nhân vật của mình ngay bây giờ.\nTuổi của mỗi anh hùng là tuổi ban đầu cộng thêm 10 năm cho mỗi token lão hóa trên thẻ; kẻ phản bội cho bạn biết kết quả lão hóa của bạn.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội không hề già đi. Thực ra, hắn dường như trẻ hơn bao giờ hết.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn ngăn chặn quá trình lão hóa siêu nhiên.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Cho mỗi thập kỷ bạn già đi, đặt một token lão hóa lên thẻ nhân vật của bạn. Kẻ phản bội cho bạn biết tác động của lão hóa.',
      },
      {
        heading: 'Cách Ngăn Chặn Quá Trình Lão Hóa',
        body: 'Hoàn thành Nghi Lễ Trẻ Hóa: số lần đổ nghi lễ thành công bằng số người chơi. Mỗi anh hùng chỉ có thể thử một lần đổ nghi lễ mỗi lượt, và chỉ trong Catacombs, Charred Room, Crypt, Gallery, Kitchen, Pentagram Chamber, hoặc Tower, dùng đổ Sanity hoặc Knowledge 5+.\nMỗi lần thành công đặt token chỉ số tương ứng lên ô phòng đã dùng. Một khi một anh hùng đã dùng một phòng cho nghi lễ, không anh hùng nào có thể dùng lại phòng đó.',
      },
      {
        heading: 'Medallion',
        body: 'Khi mang Medallion, trừ 1 khỏi số thập kỷ bạn già đi trong lượt của kẻ phản bội (tối thiểu 0).\nMỗi khi một anh hùng chết, ai đang mang Medallion sẽ già đi 1 thập kỷ.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Câu thần chú đã được niệm. Tất cả tĩnh lặng. Trong nhiều phút không ai cử động, chờ xem cơ thể bạn có tiếp tục già đi không. Chẳng mấy chốc tất cả các bạn cười và khóc trong cơn cuồng loạn. Bạn còn sống - nhưng một phần cuộc đời bạn đã bị đánh cắp vĩnh viễn.',
      },
    ],
    monsters: [],
  },

  45: {
    id: 45,
    title: 'Tích, Tích, Tích',
    intro:
      'Ban đầu bạn không để ý đến tiếng tích tắc. Rồi, trong một khoảnh khắc tĩnh lặng, bạn nghe thấy nó: tích, tích, tích, như một nhịp tim cơ khí rùng rợn. Nghe gã madman khúc khích, bạn nhận ra tiếng tích tắc đang phát ra từ chính bạn. Kẻ phản bội đã cài một quả bom lên người bạn!',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Mỗi anh hùng lấy một token item hình ngũ giác (Time Bomb).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội là một chuyên gia phá dỡ đã gài mỗi người trong các bạn một quả Time Bomb. Bạn không biết còn bao nhiêu thời gian. Kẻ phản bội cầm một bộ kích nổ làm nổ các quả bom, nhưng chỉ khi ở trong phòng bạn hoặc một phòng kề bên (không cần cửa thông nhau). Các quả bom cũng đang tích tắc và có thể tự phát nổ. Trong khi đó kẻ phản bội đang chế tạo Big Bomb - hãy ngăn gã chuyên gia phá dỡ trước khi hắn giết tất cả các bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Kẻ phản bội đã chết và ít nhất một anh hùng sống sót.',
      },
      {
        heading: 'Cách Ngăn Chặn Kẻ Phản Bội',
        body: 'Ít nhất một người trong các bạn cần tháo ngòi Time Bomb của mình để giết kẻ phản bội trước khi Big Bomb nổ.\nMỗi lượt một lần, đổ Knowledge 7+ để vô hiệu hóa Time Bomb gắn trên người bạn (5+ nếu bạn có lá Madman). Nếu thành công bỏ token Time Bomb của bạn đi. Nếu kết quả đổ là 2 hoặc thấp hơn, bạn kích hoạt quả bom và tất cả nhà thám hiểm trong phòng bạn nổ tung và chết (lá item và omen của họ bị bỏ đi).\nThay vào đó, bạn có thể tháo ngòi bom của người khác nếu bạn ở trong phòng họ và được phép - cũng 7+ (5+ với Madman) và cùng hình phạt khi đổ ra 2 hoặc thấp hơn.\nKẻ phản bội tiếp tục chế tạo Big Bomb cho đến khi bị giết.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Các linh kiện của quả bom khổng lồ của gã phá dỡ nằm vương vãi và trơ ì. Không có bộ óc điên loạn của kẻ phản bội kết nối chúng lại, chúng chỉ là những món đồ vô hại chẳng có gì quan trọng.',
      },
    ],
    monsters: [],
  },

  46: {
    id: 46,
    title: 'Bữa Tiệc',
    intro:
      'Bạn ngửi thấy mùi một bữa tiệc thịnh soạn - rồi nỗi kinh hoàng: các bộ phận cơ thể người rải rác khắp hành lang dẫn đến một cái đầu bị chặt đặt trên đĩa bạc. Một trong những người đồng hành của bạn đã phản bội bạn cho lũ ăn thịt người điên loạn cư ngụ trong dinh thự này, và kẻ phản bội muốn bạn làm món chính.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nếu Attic không có trong nhà, lục chồng phòng tìm nó, đặt nó ở tầng trên, rồi xáo bài.\nĐặt một số token quái vật nhỏ màu đỏ tươi (Victim) vào Attic bằng số anh hùng.\nTất cả các Victim bắt đầu quay cùng một hướng (đầu nhọn của mỗi token hướng về phía đó).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã dụ bạn vào một căn nhà của lũ Cannibal Freak điên loạn. Khi kẻ phản bội hoặc một Freak ăn thịt một Victim, kẻ đó trở nên mạnh hơn. Chúng cũng muốn ăn thịt bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Kẻ phản bội và tất cả các Cannibal Freak đã chết, hoặc tất cả các Victim và tất cả các anh hùng đều thoát khỏi căn nhà. Nếu dù chỉ một Victim hoặc anh hùng bị giết, bạn chỉ có thể thắng bằng cách giết hết phe đối địch. Mỗi Victim bạn đưa ra ngoài (qua cửa trước, rồi gỡ ra) làm cho kẻ phản bội khó thắng hơn.',
      },
      {
        heading: 'Di Chuyển Các Victim',
        body: 'Người ngồi bên trái kẻ phản bội di chuyển các Victim vào đầu lượt của mình. Trừ khi một anh hùng ở chung phòng, một Victim di chuyển thẳng về phía trước 2 phòng; nếu không thể, nó rẽ sang lối ra tiếp theo bên trái và đi vào đó (đây là cách duy nhất hướng quay của một Victim thay đổi).\nVictim phản ứng với các mối nguy trong nhà và các lần đổ bắt buộc như quái vật và không thể đi qua một cửa chưa được khám phá.\nMột Victim dừng lại và sẽ không tự di chuyển khi một anh hùng ở trong phòng của nó.\nNếu một anh hùng bắt đầu lượt cùng một Victim, anh hùng đó có thể di chuyển cùng nó 2 ô theo bất kỳ hướng nào trước khi tiếp tục lượt của mình. Mỗi anh hùng một Victim mỗi lần di chuyển, nhưng một Victim có thể được nhiều anh hùng di chuyển nhiều lần trong một vòng.\nFreak và kẻ phản bội không làm chậm Victim, và ngược lại.\nĐổ Knowledge hoặc Might 5+ để mở cửa trước ở Entrance Hall (nếu thành công rút một lá event và kết thúc lượt của bạn). Ở các lượt sau, một anh hùng có thể di chuyển ra cửa trước (1 ô) cùng một Victim để trốn thoát, và quay vào lại (1 ô) để đón thêm Victim.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Thay vì bị choáng, Victim và Cannibal Freak sẽ bị giết nếu bị đánh bại.\nVictim không thể tấn công và không gây sát thương nếu chúng đánh bại một kẻ tấn công.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Thi thể của tên freak nhỏ dãi cuối cùng nằm trước mặt bạn, vẫn còn giật giật trong vũng nước bọt và máu của chính nó. Bạn đã thắng, nhưng... ọe.',
      },
    ],
    monsters: [{ name: 'The Victims', stats: 'Speed 2 · Might 3 · Sanity 3' }],
  },

  47: {
    id: 47,
    title: 'Mãng Xà Ouroboros',
    intro:
      'Người bạn của bạn rùng mình, ngã xuống sàn, và thân thể anh ta tách làm đôi như thể một chiếc khóa kéo khổng lồ mở nó ra từ đầu đến chân. Worm Ouroboros, con rắn vĩ đại bao quanh thế giới, đã cưỡng ép tiến vào thực tại của bạn qua thân xác người bạn... đã chết... của bạn.',
    sections: [
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đã biến thành Worm Ouroboros: một con rắn khổng lồ hai đầu với thân hình rất dài. Nếu nó lớn lên hoàn toàn, sẽ không có gì ngăn được nó. Hãy giết nó nhanh.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Worm Ouroboros đã chết.',
      },
      {
        heading: 'Cách Giết Ouroboros',
        body: 'Tiêu diệt cả hai Ouroboros Head. Với mỗi đầu, theo thứ tự:\n1. Nhặt Skull trong phòng nơi kẻ phản bội đã thả nó.\n2. Mang Skull vào một phòng có token Ouroboros Head; đổ Sanity 5+ mỗi lượt một lần để niệm một câu thần chú làm suy yếu, hạ Might của nó xuống 5 và khiến nó dễ bị tổn thương suốt phần còn lại của ván chơi. Bạn không thể tấn công một Head cho đến khi đã niệm câu thần chú này.\n3. Sau câu thần chú, mỗi lần đánh bại tính là 1 lần trúng. Mỗi Head phải bị trúng số lần bằng một nửa số người chơi (làm tròn lên) để bị tiêu diệt. (Kẻ phản bội theo dõi số lần trúng.)',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Token Ouroboros Head và Body làm chậm di chuyển của anh hùng.\nOuroboros Head không bị ảnh hưởng bởi các đòn tấn công Speed (Revolver, Dynamite).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Con rắn vĩ đại quằn quại trong cơn hấp hối. Bạn lau máu khỏi mặt và gục xuống đất. Bạn đã giết được nó. Nó đã chết. Khoan - nó vừa co giật nữa phải không? Một kẻ hủy diệt thế giới có bao giờ thực sự chết được không? Để cho chắc, bạn nên rời khỏi căn nhà ngay bây giờ.',
      },
    ],
    monsters: [],
  },

  48: {
    id: 48,
    title: 'Chất Đống Như Củi',
    intro:
      'Một người đồng hành kể về những cái chết ghê rợn ở đây năm năm trước: những thiếu niên bị tàn sát từng người một bởi một gã điên không thể bị giết, thân thể bầm dập của hắn luôn quay trở lại. Giờ bạn đã thấy bức chân dung của gã điên - hắn trông giống một người họ hàng của người bạn đã kể câu chuyện. Nhìn qua một ô cửa, bạn thấy người đồng hành phản bội của mình trong một phòng với những thi thể chất đống như củi. Rồi thứ gì đó bước qua cửa trước.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Để riêng ra số token Might Roll hình tam giác bằng số người chơi. Để riêng ra số token Knowledge Roll hình tam giác tương đương.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đang hợp tác với Crimson Jack, một kẻ giết người hàng loạt siêu nhiên. Jack chỉ có thể bị giết vĩnh viễn bằng một vũ khí bị nguyền rủa giấu trong nhà. Đánh bại hắn bằng bất kỳ cách nào khác và hắn sẽ trở lại mạnh hơn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tìm thấy vũ khí bị nguyền rủa và dùng nó để giết Crimson Jack.',
      },
      {
        heading: 'Cách Tìm Vũ Khí Bị Nguyền Rủa',
        body: 'Vũ khí bị nguyền rủa là Axe, Spear, Blood Dagger, hoặc Sacrificial Dagger (bạn chọn).\nNếu các anh hùng chưa có nó, tìm kiếm trong Library, Chapel, Vault (phải đã mở), hoặc Attic: đổ Knowledge 3+ mỗi lượt một lần để tìm nó; nếu thành công lục chồng bài thích hợp tìm một vũ khí bị nguyền rủa tùy chọn, lấy nó, và xáo bài.\nRồi học cách dùng nó: ở cùng phòng với vũ khí, đổ Might hoặc Knowledge 5+ để nghiên cứu nó; mỗi lần thành công đặt token chỉ số tương ứng lên thẻ của bạn. Khi các anh hùng thu thập đủ số token bằng số người chơi, họ hiểu cách giết Crimson Jack.\nSau đó, bất kỳ anh hùng nào đánh bại Crimson Jack bằng vũ khí bị nguyền rủa sẽ giết hắn vĩnh viễn.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Đầu lượt của bạn, nếu bạn ở trong phòng của Crimson Jack bạn phải đổ Sanity 3+ thành công nếu không sẽ mất 1 điểm từ một chỉ số tinh thần và 1 từ một chỉ số vật chất (luồng hào quang sợ hãi của hắn).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Crimson Jack run rẩy trên đầu vũ khí nhưng vẫn tiếp tục lao tới, nụ cười khủng khiếp của hắn không hề dao động. Ngay khi bàn tay hắn vươn tới cổ bạn, Jack mờ dần và vũ khí của bạn rơi xuống sàn. Khi rời đi, bạn nhìn bức chân dung của hắn trên tường. Kẻ giết người đã biến mất... cho đến bây giờ.',
      },
    ],
    monsters: [],
  },

  49: {
    id: 49,
    title: 'Mặc Vừa Lắm',
    intro:
      'Bạn nghe một người bạn chạy khắp căn nhà, vừa cười vừa nức nở. Khi bạn bắt đầu tiến về phía họ, một luồng gió mạnh xé toạc qua chính linh hồn bạn, đẩy nó ra khỏi thân xác. Những bức tường mờ ảo và không rõ nét; một sợi dây bạc kéo dài từ bạn về lại thân thể bất tỉnh của bạn. Tất cả những gì bạn muốn là bò trở lại vào da thịt của chính mình - nhưng bằng cách nào?',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Lật ngã hình nhân vật của bạn xuống; giờ nhân vật đó đã bất tỉnh. Đặt một token quái vật nhỏ màu xanh dương vào phòng bạn để làm Soul lìa xác của bạn (ghi nhớ số của nó để phân biệt các Soul).\nĐể riêng ra số token Knowledge Roll hình tam giác bằng số người chơi. Để riêng ra số token Sanity Roll hình tam giác tương đương.\nNếu không có cách nào di chuyển giữa tầng hầm và phần còn lại của căn nhà, lục chồng phòng tìm ô Stairs from Basement, đặt nó vào nhà, rồi xáo bài.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Đối Địch',
        body: 'Kẻ phản bội đang hợp tác với một Astral Spirit hùng mạnh. Nếu nó có thể chiếm hữu một thân thể bất tỉnh, nó sẽ bất tử.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tiêu diệt Astral Spirit. Một khi nó bị tiêu diệt, bạn trở về thân xác của mình.',
      },
      {
        heading: 'Cách Tiêu Diệt Astral Spirit',
        body: 'Chỉ tấn công Astral Spirit bằng Knowledge hoặc Sanity. Mỗi đòn tấn công thành công đặt token chỉ số tương ứng lên thẻ của anh hùng đó. Khi các anh hùng thu thập đủ số token bằng số người chơi, Astral Spirit bị tiêu diệt.',
      },
      {
        heading: 'Soul',
        body: 'Bạn là một Soul lìa xác.\nBạn giữ nguyên tất cả các chỉ số của mình.\nBạn có thể đi xuyên tường như cửa thông nhau nhưng không qua được sàn/trần; bạn di chuyển tự do lên xuống Coal Chute, Collapsed Room, và Gallery. Bạn không bị ảnh hưởng bởi văn bản phòng đề cập đến chỉ số vật chất hoặc sát thương vật chất.\nBạn có thể dùng item của mình nhưng không thể trao đổi chúng hoặc lấy item mới; nếu Soul của bạn bị tiêu diệt, item của bạn cũng vậy.\nBạn không thể khám phá phòng mới.\nKhi tấn công hoặc phòng thủ, chỉ dùng Knowledge hoặc Sanity. Bất cứ điều gì lẽ ra gây sát thương vật chất lên Soul của bạn thì gây sát thương tinh thần thay vào đó.\nBạn không thể dùng Skull hoặc bất kỳ lá vũ khí nào.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Nếu bạn tấn công Astral Spirit và thua, bạn không nhận sát thương.\nNếu bạn đánh bại kẻ phản bội bằng một đòn tấn công tinh thần, hắn bị choáng nhưng không nhận sát thương.\nKẻ phản bội có thể tấn công thân thể bất tỉnh của bạn để gây 2 xúc xắc sát thương tinh thần; bạn không thể phòng thủ trước đòn này.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Người đồng hành của bạn tung một đòn tấn công tâm linh hủy diệt xuyên qua astral spirit. Không khí lung linh và bạn tan biến. Khi tỉnh dậy, cơ thể bạn cảm thấy lạ lẫm, như thể bạn đã mặc nhầm áo khoác của người khác về nhà. Nhưng ít nhất đó là thân thể của bạn. Bạn tin chắc nó sẽ vừa vặn trở lại sớm thôi.',
      },
    ],
    monsters: [],
  },

  50: {
    id: 50,
    title: 'Săn Tìm Kho Báu',
    intro:
      'Bạn đã nghe từ lâu về một kho báu giấu trong căn nhà này. Ở giữa hình ngôi sao năm cánh bạn tìm thấy một văn bản đóng khung: "Ta, Josiah Enders, với tâm trí và thân thể minh mẫn, nay để lại toàn bộ gia sản của ta cho bất cứ ai đủ thông minh để tìm ra nó. Các manh mối rải rác khắp căn nhà. Chúc may mắn, và hãy cẩn thận!" Bạn sẽ làm bất cứ điều gì để có được kho báu đó. Bất cứ điều gì.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Haunt này không có kẻ phản bội - chỉ có anh hùng. Tất cả các bạn đều hy vọng tìm thấy kho báu, nhưng chỉ có thể có một người thắng.\nNgười lật haunt lấy 20 token quái vật nhỏ màu đỏ đánh số 1-20, úp xuống, trộn chúng, và đặt úp một token vào mỗi phòng có biểu tượng. Đây là các Clue.\nNếu có nhiều phòng đủ điều kiện hơn số token, phân bổ đều nhất có thể giữa các tầng. Nếu có nhiều token hơn phòng, để riêng phần dư và đặt úp một token Clue vào mỗi phòng có biểu tượng mới sau khi nó được khám phá và các lá rút của nó được xử lý.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn tìm thấy kho báu. Chỉ một anh hùng có thể thắng.',
      },
      {
        heading: 'Tìm Kiếm Kho Báu',
        body: 'Ở bất kỳ phòng nào có token Clue úp xuống, tốn 1 ô di chuyển và đổ Knowledge. Cộng tổng số token Clue bạn hiện có, cùng bất kỳ điểm thưởng nào từ các token Clue cụ thể bạn mang theo (Trap, các token 17-20, không được cộng). Bạn có thể tìm kiếm nhiều phòng, hoặc một phòng nhiều lần, trong cùng một lượt.\nKết quả: 0 bạn vấp ngã, nhận 2 xúc xắc sát thương vật chất; 1-3 không có gì, thử lại; 4-12 lấy token Clue và lật ngửa nó (tra cứu tác dụng của nó); 13-15 căn nhà bắt đầu sụp đổ (lần đầu, lật một ô tầng trên không có người; nếu không thì một phòng kề bên một phòng đã sụp, không cần cửa - người trong đó bị giết; sau tầng trên, sụp tầng trệt bắt đầu từ Grand Staircase, rồi tầng hầm; đánh dấu Grand Staircase, Foyer, và Entrance Hall bằng token item); 16+ bạn tìm thấy kho báu!',
      },
      {
        heading: 'Manh Mối',
        body: 'Hầu hết các manh mối gợi ý nơi cần tìm và có thể cho điểm thưởng cho các lần tìm kiếm sau (tra cứu bảng). Một số có rủi ro và có thể giết bạn nếu đổ Knowledge thất bại; vài cái là cạm bẫy với tác dụng có hại và không cho điểm thưởng.\nBạn có thể tiếp tục tìm kiếm một phòng ngay cả sau khi manh mối của nó đã được tìm thấy.\nNhà thám hiểm có thể trao đổi token Clue như item. Nếu bạn mất một token Clue (trao đổi hoặc bị cướp), bạn không thể dùng điểm thưởng của nó cho đến khi lấy lại được.',
      },
    ],
    monsters: [],
  },
};
