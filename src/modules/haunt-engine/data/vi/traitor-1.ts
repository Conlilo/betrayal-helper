import type { HauntStory } from '../../types';

export const TT_VI_1: Record<number, HauntStory> = {
  1: {
    id: 1,
    title: 'Xác Ướp Thức Giấc',
    intro:
      'Bức tường trượt ra để lộ một quan tài đá cổ phủ đầy chữ tượng hình phát sáng. Một giọng nói khàn khàn len vào tâm trí bạn: "Ta đã mất nàng dâu của mình từ nhiều năm hơn ngươi có thể tưởng tượng... Giờ tình yêu của ta được tái sinh. Bàn tay phàm trần sẽ không ngăn được ta đoàn tụ cùng nàng." Bạn bè của bạn phải chết để đôi tình nhân được tái hợp.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội.\nĐặt token Mummy lớn hình tròn và một token item hình ngũ giác (the Sarcophagus) vào phòng của bạn.\nBạn mất lá Girl cùng mọi cộng thưởng từ nó. Thay vào đó, đặt một token quái vật nhỏ màu đỏ tía (cô Girl) vào bất kỳ phòng nào cùng tầng với nơi lật haunt và cách Mummy ít nhất 5 tile (hoặc xa nhất có thể).\nKhi một nhà thám hiểm đi vào phòng có token Girl, nhà thám hiểm đó nhận lá Girl.\nNếu bạn có Girl, bạn có thể trao token Girl cho Mummy khi ở cùng phòng; Mummy khi đó nắm giữ cô Girl.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố trục xuất Mummy trở về cõi chết.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Mummy đang nắm giữ cô Girl, đang cầm the Ring hoặc the Holy Symbol, và quay trở về phòng có Sarcophagus cùng chúng. Bạn cũng thắng khi tất cả anh hùng đều chết.\nNếu cả the Ring lẫn the Holy Symbol đều không có trong ván, lần kế tiếp bạn khám phá một phòng omen, hãy lục chồng omen và rút một trong hai lá đó, rồi xáo lại chồng đó.',
      },
      {
        heading: 'The Mummy',
        body: 'Nếu Mummy đổ ra 0 hoặc 1 cho việc di chuyển, nó có thể dùng một secret passage để di chuyển tới bất kỳ ô nào trong nhà.\nMummy có thể mang item và nắm giữ cô Girl, nhưng chúng không ảnh hưởng đến chỉ số của nó. Bạn có thể trao item và cô Girl cho Mummy khi ở cùng ô.',
      },
      {
        heading: 'Mummy Phải Làm Điều Này Trong Lượt Của Nó',
        body: 'Mummy phải tấn công một nhà thám hiểm cùng phòng (nếu có thể).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Mummy thực hiện đòn tấn công Might nhưng gây sát thương Speed cho đến khi Speed của đối thủ tụt xuống mức thấp nhất (đòn này không thể hạ xuống biểu tượng đầu lâu). Sau đó, đối thủ chịu sát thương Might cho đến khi chết.\nKhi Mummy đánh bại một đối thủ với chênh 2 trở lên, nó có thể cướp một item (hoặc nắm giữ cô Girl) thay vì gây sát thương.\nMummy miễn nhiễm với đòn tấn công Speed (Revolver, Dynamite).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Xác ướp nâng cô gái đang gào khóc lên trong vòng tay quấn vải lanh và thổi hơi vào miệng cô. "Tư tế của ta, tình yêu của ta... ta lại bên nhau," cô gái thì thầm, "và chẳng mấy chốc cả thế giới sẽ thờ phụng chúng ta..."',
      },
    ],
    monsters: [{ name: 'The Mummy', stats: 'Speed 3 · Might 8 · Sanity 5' }],
  },

  2: {
    id: 2,
    title: 'Buổi Cầu Hồn',
    intro:
      'Một cơn lạnh ghê rợn buông xuống và sương mù dâng lên từ sàn nhà. "Ta phải được yên nghỉ... cho linh hồn ta yên nghỉ... nếu không thì chết..." Tấm spirit board bạn cầm đập rộn theo nhịp tim bạn, và sương mù cuộn lại thành những chữ cái: GIẾT HẾT BỌN CHÚNG.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội.\nĐể riêng một token quái vật nhỏ màu tím (the Ghost), 1 token Knowledge Roll hình tam giác, và 1 token Sanity Roll hình tam giác.\nNếu Pentagram Chamber không có trong nhà, hãy lục chồng phòng để tìm nó và đặt nó kề một ô cửa tầng hầm, cách ít nhất 5 tile (hoặc xa nhất có thể), rồi xáo lại.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố triệu hồi the Ghost trước bạn. Nếu thành công, họ giành quyền điều khiển nó cùng một nhiệm vụ; nếu thất bại, họ sẽ cố phá hủy nó.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết, bất kể ai triệu hồi được the Ghost trước.',
      },
      {
        heading: 'Cách Triệu Hồi The Ghost',
        body: 'Bạn chạy đua với các nhà thám hiểm để triệu hồi the Ghost bằng cách thực hiện một buổi cầu hồn.\nKhi đang cầm Spirit Board, bạn có thể thử đổ Knowledge hoặc Sanity 5+. Mỗi lượt bạn chỉ được thử một lần. Khi thành công, nhận token chỉ số tương ứng. Khi bạn đã gom đủ một token Knowledge Roll và một token Sanity Roll, bạn triệu hồi được the Ghost.\nNếu bạn triệu hồi trước các anh hùng, đặt token Ghost kề bên quân của bạn. Nếu các anh hùng thành công trước, họ sẽ cho bạn biết điều gì xảy ra.',
      },
      {
        heading: 'Nếu Bạn Triệu Hồi The Ghost Trước',
        body: 'Lời tuyên bố của Ghost (đọc to): "Ta sẽ trả thù kẻ sống!"\nBạn điều khiển the Ghost nếu bạn triệu hồi nó trước, hoặc nếu các anh hùng triệu hồi nó trước nhưng thất bại nhiệm vụ. Nếu nhà thám hiểm của bạn chết, bạn vẫn điều khiển the Ghost.\nMỗi lượt the Ghost phải di chuyển về phía một anh hùng và tấn công nếu có thể.\nCuối lượt đầu tiên bạn điều khiển nó, căn nhà bắt đầu sụp đổ (đầu tiên là Attic, hoặc bất kỳ phòng tầng trên nào không có người). Sau đó, cuối lượt mỗi nhà thám hiểm, người đó chọn một phòng mới để sụp đổ. Lật úp các tile sụp đổ; một phòng không thể sụp trừ khi kề một phòng đã sụp khác (không cần cửa). Phòng có người mà sụp sẽ giết tất cả mọi người trong đó. Sụp tầng trên → tầng trệt (bắt đầu Grand Staircase) → tầng hầm (bắt đầu Basement Landing).\nChỉ the Ghost mới có thể đi qua các phòng đã sụp; nó cũng có thể đi xuyên tường (không xuyên sàn/trần).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Không ai có thể tấn công cho đến khi buổi cầu hồn hoàn tất. Nếu các anh hùng điều khiển the Ghost, họ sẽ giải thích luật tấn công của họ.\nThe Ghost thực hiện đòn tấn công Sanity (sát thương tinh thần). Chỉ anh hùng có the Ring, hoặc đang ở trong Pentagram Chamber, mới có thể tấn công nó, và chỉ dùng Sanity.\nNếu the Ghost tấn công và đổ thấp hơn anh hùng, nó không bị tổn hại.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Sương mù phủ kín căn nhà. Bạn lướt qua màn sương, lặng lẽ như bóng ma bên cạnh. Giờ đây có hai linh hồn được định sẵn sẽ cùng ám nơi này. Mãi mãi.',
      },
    ],
    monsters: [{ name: 'The Ghost', stats: 'Speed 4 · Sanity 6' }],
  },

  3: {
    id: 3,
    title: 'Món Hầm Chân Ếch',
    intro:
      'Từ trong bóng tối, một giọng nói dụ dỗ bạn: "Cháu sẽ giúp ta chứ, con ngỗng béo bé nhỏ của ta? Lũ người khó ưa đầy khắp nhà ta, và chúng còn cướp cuốn sách cưng của ta nữa! Giúp ta trừng trị chúng nào, cục cưng của ta!"',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn vẫn còn trong ván nhưng đã trở thành kẻ phản bội.\nĐể riêng một token quái vật nhỏ màu đỏ (the Cat) và 4 token quái vật nhỏ màu cam (Frogs).\nĐặt token Witch lớn hình tròn vào Entrance Hall.\nĐặt một token item hình ngũ giác (một Root) vào mỗi phòng Conservatory, Larder, và Kitchen (đặt ngay bây giờ hoặc khi được khám phá; đừng thông báo). Bạn không thể nhặt token Root.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang giữ sách phép của the Witch (lá Book). Hãy lấy nó từ tay họ — họ có thể dùng nó để vượt qua sự bất khả xâm phạm của the Witch.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết hoặc bị biến thành Frog.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Khi nhà thám hiểm đầu tiên bị biến thành Frog, đặt token Cat vào phòng nơi lật haunt. Vào lượt quái vật kế tiếp nó di chuyển về phía Frog gần nhất. Nếu Cat đánh bại một Frog bằng đòn Might trong cùng phòng, nó ăn con Frog đó (giết anh hùng ấy). Cat bỏ qua các Frog đang được mang đi.',
      },
      {
        heading: 'Phép Của The Witch',
        body: 'The Witch niệm một phép mỗi lượt quái vật (và, nếu bạn đang giữ lá Book, bạn cũng có thể niệm một trong hai phép đầu tiên vào mỗi lượt của mình).\nSkin of Frog: Nhắm một anh hùng cùng phòng. Cả hai đổ Sanity; nếu Witch đổ cao hơn, anh hùng đó biến thành Frog, bỏ hết item, và bị giảm Might cùng Knowledge về mức thấp nhất trên biểu tượng đầu lâu. Một Frog không thể tấn công, rút lá hay khám phá phòng; một nhà thám hiểm khác có thể mang nó như một item. Cả bạn lẫn Witch đều không thể tấn công một Frog.\nBreath of Dragon: Nhắm bất kỳ nhà thám hiểm nào trong tầm nhìn thẳng hoặc cùng phòng — 2 xúc xắc sát thương vật chất không thể phòng thủ hay giảm bớt.\nWings of Raven: Di chuyển the Witch tới bất kỳ phòng nào (hoặc di chuyển bạn thay vì cô ta nếu cô ta đang ở cùng bạn).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'The Witch bất khả xâm phạm: cô ta không thể bị tấn công và không thể tấn công theo cách thông thường, nhưng niệm một phép mỗi lượt. Cô ta không thể nhặt item.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: '"Một chú ếch nhỏ, hai chú ếch nhỏ... nào con búp bê của ta, cho mấy người bạn ếch xấu xa của con làm mồi cho con mèo dễ thương đi. Cục cưng ngỗng con của ta đây rồi!"',
      },
    ],
    monsters: [
      { name: 'The Cat', stats: 'Speed 3 · Might 3 · Sanity 2' },
      { name: 'The Witch', stats: 'Speed 4 · Might 3 · Sanity 6' },
    ],
  },

  4: {
    id: 4,
    title: 'Mạng Lưới Định Mệnh',
    intro:
      'Một sự hiện diện đen tối bò vào tâm trí bạn. Bạn vẫn là bạn, nhưng bạn cũng là nó — con nhện. Một miếng mồi phàm trần béo ngậy đã giãy giụa trong mạng của bạn. Những kẻ khác sẽ cố ngăn sự ra đời... trừ khi bạn ngăn chúng trước.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Với 5–6 người chơi, nhà thám hiểm của bạn trở thành kẻ phản bội. Với 3–4 người chơi, nhà thám hiểm của bạn đã bị ăn thịt — bỏ hết item và gỡ quân của bạn.\nĐặt token Spider lớn hình tròn vào phòng có nhà thám hiểm đang cầm lá Bite.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 1 để đếm thời gian.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Người lật haunt bị mắc kẹt trong mạng nhện dính, đầy trứng nhện khổng lồ, và không thể di chuyển.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Hoặc trứng của the Spider nở (vào lượt 9), hoặc tất cả anh hùng đều chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Cuối mỗi lượt của mình, nâng thanh Lượt/Sát thương lên mức kế tiếp.',
      },
      {
        heading: 'Spider Phải Làm Điều Này Trong Lượt Của Nó',
        body: 'The Spider phải di chuyển về phía một nhà thám hiểm không phải người lật haunt và tấn công nếu có thể. Cả bạn lẫn the Spider đều không thể tấn công người lật haunt trừ khi trứng đã bị phá hủy.\nChỉ số của the Spider thay đổi theo lượt: L1 Spd0/Mgt2/San5, L2 Spd1/Mgt2/San5, L3 Spd2/Mgt4/San5, L4 Spd4/Mgt4/San5, L5 Spd5/Mgt5/San5, L6 Spd6/Mgt7/San5, L7+ Spd6/Mgt8/San5.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Mỗi đòn tấn công của the Spider, bạn có thể đổ lại mỗi xúc xắc ra mặt trắng một lần (chỉ một lần).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: '...đám con của bạn ngấu nghiến những con người ngon lành, ngon lành.',
      },
    ],
    monsters: [{ name: 'The Spider', stats: 'Chỉ số thay đổi theo lượt (xem bảng)' }],
  },

  5: {
    id: 5,
    title: 'Tôi Đã Là Người Sói Tuổi Teen',
    intro:
      'Ánh trăng tràn vào. Bạn ngước nhìn vầng trăng tròn. Tâm trí bạn gào thét khi nó lụi tàn, ngay cả khi cơ thể bạn hú vang trong niềm vui sướng và sức mạnh mới tìm thấy.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội. Đặt một token quái vật nhỏ màu đỏ lên lá nhân vật của bạn.\nGiờ bạn là một Werewolf. Bỏ hết item; mất quyền giữ Girl/Madman (để riêng các lá, điều chỉnh chỉ số, dùng token — chúng ở lại trong phòng).\nNâng mọi chỉ số dưới mức khởi đầu về mức khởi đầu. Sau đó tăng chỉ số của bạn thêm 1 điểm cho mỗi anh hùng trong ván (tổng số điểm, không phải mỗi chỉ số).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Có lẽ bạn từng biết điều gì đó, nhưng giờ bạn đã quá sói để mà nhớ nổi.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết hoặc đã biến thành Werewolf.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Đầu mỗi lượt của mình, nhận 1 Might hoặc 1 Speed. Bạn không thể nâng một chỉ số vượt mức tối đa trên lá của mình.',
      },
      {
        heading: 'The Dog',
        body: 'Đặt một token quái vật nhỏ màu cam vào phòng của bạn (the Dog, một quái vật bạn điều khiển). Bạn không cần lá Dog.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Khi bạn hoặc the Dog đánh bại một anh hùng, anh hùng đó chịu sát thương bình thường. Đầu mỗi lượt sau đó của anh hùng đó, họ đổ Sanity 4+ để chống lại bệnh người sói; nếu thất bại họ biến thành Werewolf và đọc haunt này.\nChỉ số của một Werewolf không thể bị hạ xuống biểu tượng đầu lâu trừ khi dùng item đặc biệt trong Secrets of Survival; tất cả sát thương khác bị giảm một nửa (làm tròn lên).\nCả Werewolf lẫn the Dog đều không thể mang item hay dùng thang máy.\nNếu bạn thắng và một Werewolf khác đã giết một anh hùng, người chơi đó cũng thắng.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn lướt ra ngoài khu vườn, tận hưởng vị máu tanh xoa dịu. Cuộc đi săn đêm nay mới chỉ vừa bắt đầu.',
      },
    ],
    monsters: [{ name: 'Dog', stats: 'Speed 4 · Might 4 · Sanity 3' }],
  },

  6: {
    id: 6,
    title: 'Con Mắt Bay Lơ Lửng',
    intro:
      'Chủ nhân của bạn cuối cùng đã đến. Một con mắt khổng lồ bay lơ lửng hạ xuống từ con tàu và treo lửng trên bạn. Đã đến lúc bạn bè bạn phải quỳ rạp trước những lãnh chúa mới của chúng.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nVới 3–4 người chơi, để riêng một token Alien nhỏ màu cam; với 5–6 người chơi, để riêng hai cái. Đặt (các) token Alien vào phòng nơi lật haunt, cộng thêm một token item hình ngũ giác (the Spaceship).\nĐặt quân của bạn lên token Spaceship. Nhà thám hiểm của bạn giờ ra khỏi ván (cùng tất cả item và omen), đang chờ được đưa đi.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố ngăn bạn bắt cóc họ và có cách thoát khỏi sự khống chế của lũ Alien.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết hoặc đang ở trên the Spaceship.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Thay vì đòn tấn công Might, một Alien có thể thực hiện đòn tấn công Sanity nhắm vào mỗi anh hùng trong phòng nó (xử lý riêng từng người). Nếu một anh hùng đánh bại Alien, cả hai đều không chịu sát thương. Nếu một Alien đánh bại một anh hùng, anh hùng đó không chịu sát thương nhưng rơi vào sự khống chế.\nMột anh hùng bị khống chế trong lượt của họ sẽ di chuyển về phía the Spaceship (không đổ xúc xắc/không chịu sát thương phòng, không hành động) và lên tàu vào đầu lượt kế tiếp khi ở đó, rời khỏi ván.\nCác anh hùng có thể giải thoát cho nhau; một khi được giải thoát, anh hùng đó miễn nhiễm với việc bị thao túng tâm trí. Lũ Alien chỉ có thể khống chế một người một lần.\nLũ Alien miễn nhiễm với đòn tấn công Speed. Alien bị choáng vẫn giữ quyền khống chế các anh hùng nó đã đánh bại.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Chủ nhân của bạn hài lòng với món quà của bạn. Bạn bè bạn sẽ là những đối tượng tuyệt vời cho các thí nghiệm sinh học ngoài hành tinh — và bạn có thể giữ lại đôi mắt làm kỷ niệm.',
      },
    ],
    monsters: [{ name: 'The Aliens', stats: 'Speed 4 · Might 6 · Sanity 6' }],
  },

  7: {
    id: 7,
    title: 'Dây Thường Xuân Ăn Thịt',
    intro:
      'Bạn cảm thấy những tua cuốn đang bò lên dinh thự và len qua các cửa sổ. Đám dây leo phải lớn lên. Cây cối cần gì? Ánh sáng, nước... và phân bón. À! Bạn bè của bạn!',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội. Nếu đang cầm lá Book, hãy bỏ nó (sau này bạn không thể nhặt lại).\nĐể riêng các cặp token đánh số gồm quái vật nhỏ màu cam (Roots) và xanh lá (Tips) với số lượng bằng hai lần số người chơi (tối đa 10 cặp); mỗi cặp là một Creeper.\nĐặt một Root vào mỗi phòng Creeper khả dụng (Entrance Hall, Balcony, Bedroom, Chapel, Conservatory, Dining Room, Gardens, Grand Staircase, Graveyard, Master Bedroom, Patio, Tower), tối đa một cái mỗi phòng. Đặt một Tip vào mỗi phòng có Root.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang chế tạo một item đặc biệt (Secrets of Survival) có thể phá hủy đám dây leo của bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết, hoặc item đặc biệt họ chế tạo đã bị phá hủy. Để phá hủy nó, hãy cướp nó, rồi kết thúc lượt của bạn trong Chasm, Furnace Room, hoặc Underground Lake.\nMột Creeper lớn lên bằng cách di chuyển Tip của nó; Root không bao giờ rời khỏi phòng của nó. Nếu một Tip đi vào Mystic Elevator, thang sẽ không hoạt động cho đến khi Tip rời đi. Root không làm chậm di chuyển, nhưng Tip thì có.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Root không di chuyển và không thể tấn công hay bị tấn công; Tip thì có thể.\nNếu một Tip đánh bại một anh hùng trong giao tranh vật chất, anh hùng không chịu sát thương nhưng bị tóm và bỏ hết item trong phòng đó; Tip kết thúc di chuyển của nó.\nCác Tip khác không thể tấn công một anh hùng đang bị tóm, nhưng bạn thì có thể. Một Tip đang tóm di chuyển 2 ô về phía Root của nó mỗi lượt (không thể tấn công). Đầu lượt của một Creeper, bất kỳ anh hùng nào đang bị tóm ở Root của nó sẽ bị giết và nghiền thành phân; gỡ Creeper đó ra.\nThe Bell không có tác dụng với anh hùng đang bị tóm; the Spirit Board không có tác dụng với Tip.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn ngắm đám dây leo bò khắp trần nhà và những tấm khăn trải. Chẳng mấy chốc bạn sẽ tìm thêm "bạn bè" để nuôi đám dây leo quý giá. Bạn vốn luôn có bàn tay mát cây.',
      },
    ],
    monsters: [{ name: 'Creepers', stats: 'Speed 2 · Might 5 · Sanity 3' }],
  },

  8: {
    id: 8,
    title: 'Tiếng Than Của Banshee',
    intro:
      'Những tấm áo choàng bạc tả tơi xoáy ở rìa tầm nhìn của bạn; thứ gì đó bước vào phòng sau lưng bạn và thở dài. Cái chết đã cận kề — nhưng không phải cho bạn. Tấm spirit board bảo vệ bạn khỏi giọng nói chết người của người thương.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội. Đặt token Banshee lớn hình tròn vào phòng của bạn và quyết định nó quay hướng nào (dùng mũi tên).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ định làm câm lặng the Banshee.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'The Banshee',
        body: 'The Banshee di chuyển số ô bằng kết quả đổ Speed của nó. Mỗi lần bạn di chuyển nó, đổ 2 xúc xắc:\n0: Đặt nó vào bất kỳ phòng nào cách tối đa 8 tile (không đi xuyên qua các phòng).\n1: Chọn phòng đầu tiên của nó; sau đó nó luôn rẽ trái nếu có thể.\n2: Chọn phòng đầu tiên của nó; sau đó nó đi thẳng nếu có thể (nếu không thì ngẫu nhiên trái/phải).\n3: Chọn phòng đầu tiên của nó; sau đó nó luôn rẽ phải nếu có thể.\n4: Bạn điều khiển di chuyển của nó, nhưng tiếng than của nó chỉ có thể ảnh hưởng một nhà thám hiểm một lần.\nNó "bám" tường khi rẽ. Nó không bị ảnh hưởng bởi di chuyển của người khác và không thể khám phá phòng. Đi vào một số phòng nhất định (Upper Landing, Collapsed Room, Gallery, các phòng có token đặc biệt) cho phép bạn di chuyển nó tới phòng tương ứng. Nó không thể dùng Mystic Elevator.',
      },
      {
        heading: 'Tiếng Than',
        body: 'Nếu the Banshee đi qua hoặc dừng lại trong một phòng có nhà thám hiểm, nó than. Mỗi nhà thám hiểm ở đó đổ Sanity: 6+ chịu 1 xúc xắc sát thương tinh thần; 3–5 chịu 2 xúc xắc; 0–2 chịu 4 xúc xắc.\nBạn miễn nhiễm với tiếng than khi đang cầm the Spirit Board.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'The Banshee không thể bị tấn công.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Mái tóc bạc của banshee quấn quanh bạn khi bạn nhìn vào đôi mắt lạnh như băng của nàng. Giờ chỉ còn hai người và bài hát ám ảnh của tình yêu. Bên nhau. Mãi mãi.',
      },
    ],
    monsters: [{ name: 'The Banshee', stats: 'Speed 8' }],
  },

  9: {
    id: 9,
    title: 'Vũ Điệu Tử Thần',
    intro:
      'Mọi chiếc đồng hồ đều điểm nửa đêm. Một nghệ sĩ vĩ cầm đơn độc bắt đầu một giai điệu ám ảnh gọi mời bạn nhảy múa. Tâm trí bạn vùng vẫy và gào thét, rồi... cớ sao bạn lại từng kháng cự? Vũ điệu phải tiếp diễn mãi mãi.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Haunt này bắt đầu mà không có kẻ phản bội — chỉ có anh hùng. Mỗi anh hùng có khả năng trở thành kẻ phản bội trong lượt của mình. Đừng đọc haunt này trừ khi nhà thám hiểm của bạn đã trở thành kẻ phản bội.\nNâng mọi chỉ số của bạn dưới mức khởi đầu về mức đó.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố làm dừng tiếng nhạc.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'The Holy Symbol đã bị phá hủy. Hãy cướp nó, rồi kết thúc lượt của bạn trong Chasm, Furnace Room, hoặc Underground Lake.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Nhảy múa cho đến khi đôi chân tê dại. Mỗi lượt, đổ Might: 3+ không sao; 0–2 bạn không thể di chuyển lượt này và mất 1 Might.\nKhác với các anh hùng, bạn không cần đổ Sanity đầu mỗi lượt kể cả khi không có the Holy Symbol.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể thực hiện đòn tấn công Might; thay vào đó bạn thực hiện đòn tấn công Speed. Nếu bạn đánh bại một anh hùng với chênh 2+ bằng đòn Speed, bạn có thể cướp một item thay vì gây sát thương.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Tiếng nhạc tràn ngập dinh thự cổ kính. Những vũ công xoay vòng khắp phòng khiêu vũ trong khi nghệ sĩ vĩ cầm tiếp tục chơi đàn — hân hoan đến mức họ thà chết còn hơn dừng lại. Và rồi họ sẽ chết.',
      },
    ],
    monsters: [],
  },

  10: {
    id: 10,
    title: 'Sum Họp Gia Đình',
    intro:
      'Madman nghiêng đầu: "Cậu có nghe thấy không? Dưới sàn nhà, nơi tôi đặt họ. Gia đình tôi." Sàn nhà nứt ra và hai cái xác trồi lên dưới ánh sáng. Hắn giữ chặt bạn tại chỗ: "Mẹ và Cha... họ đang muốn nhận con nuôi."',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'The Madman đã giết nhà thám hiểm của bạn — gỡ quân của bạn ra và đặt một token quái vật màu vàng (the Madman) vào chỗ đó. Bỏ hết item.\nLấy các token quái vật màu xanh dương (Zombies) bằng số người chơi. Đặt mỗi cái vào một phòng omen, tối đa một cái mỗi phòng; số dư đặt vào bất kỳ phòng không phải event nào.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 0 để đếm sát thương.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố nhốt tất cả lũ Zombie vào các phòng đặc biệt.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Di Chuyển Lũ Zombie',
        body: 'Di chuyển mỗi Zombie tùy ý cho đến khi nó có tầm nhìn thẳng tới một anh hùng; sau đó nó phải di chuyển về phía anh hùng nhìn thấy gần nhất (bạn chọn khi hòa) và tiếp tục truy đuổi cho đến khi mất tầm nhìn. Nếu một anh hùng gần hơn xuất hiện trong tầm nhìn vào đầu lượt của nó, nó đổi mục tiêu. Một Zombie tấn công ngay khi chung phòng với một anh hùng. Nếu một Zombie bị mắc bẫy, các anh hùng sẽ cho bạn biết điều gì xảy ra.',
      },
      {
        heading: 'The Madman',
        body: 'The Madman có thể chịu 5 điểm sát thương vật chất trước khi bị giết (dùng kẹp để đếm). Sát thương không ảnh hưởng đến chỉ số của hắn.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Gia đình giận bạn — những đứa con mới bạn hứa hẹn đều bị hỏng hết rồi. Bạn nghe tiếng Mẹ khóc dưới sàn nhà. "Đừng khóc, Mẹ! Con biết tìm thêm ở đâu mà."',
      },
    ],
    monsters: [
      { name: 'Zombies', stats: 'Speed 2 · Might 6 · Sanity 2 · Knowledge 3' },
      { name: 'The Madman', stats: 'Speed 3 · Might 5 · Sanity 5' },
    ],
  },

  11: {
    id: 11,
    title: 'Cho Chúng Vào',
    intro:
      'Những lời chỉ dẫn lộn xộn của madman dần khớp lại với nhau. Màn sương ngoài cửa sổ — có thứ gì đó sống trong đó, và chúng muốn vào. "Cuối cùng cũng tới! Mở toang cửa sổ ra!" Bạn tuân lệnh.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội. Mất mọi cộng thưởng từ lá Madman (để riêng nó); đặt một token Madman nhỏ màu vàng vào phòng của bạn.\nĐặt một token quái vật nhỏ màu tím úp xuống vào Entrance Hall và vào mỗi phòng có cửa sổ hướng ra ngoài (lũ Specter đang chờ bên ngoài). Đừng đặt vào nơi cửa sổ là giả.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Nếu họ hoàn thành một nghi lễ trừ tà, họ sẽ trục xuất lũ Specter.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Cách Cho Lũ Specter Vào',
        body: 'Bạn và the Madman mở cửa sổ và cửa trước (Entrance Hall) để cho lũ Specter vào. Mở một cái tốn 1 ô di chuyển. Một khi đã mở, lật token Specter đang úp lên; nó có thể di chuyển và tấn công ngay trong lượt đó. Các phòng mới có cửa sổ hướng ra ngoài sẽ nhận một Specter úp xuống; gỡ nó ra nếu cửa sổ đó hóa ra là giả. Specter đang úp không ảnh hưởng đến anh hùng và không bị ảnh hưởng bởi the Bell hay Spirit Board.',
      },
      {
        heading: 'The Madman Phải Làm Điều Này',
        body: 'Trong lượt quái vật, the Madman di chuyển theo đường ngắn nhất tới Specter úp gần nhất và mở cửa sổ đó (hoặc cửa trước). Một khi tất cả đã được lật lên, hắn khám phá để tìm thêm phòng có cửa sổ hướng ra ngoài (bỏ qua đặc tính phòng, không dừng lại vì biểu tượng). Chỉ sau khi tất cả Specter đã vào trong, the Madman mới có thể tấn công.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Lũ Specter chỉ có thể tấn công và bị tấn công bằng đòn Sanity. Một anh hùng có the Ring đánh bại một Specter bằng đòn Sanity sẽ trục xuất nó. The Madman không thể tấn công anh hùng cho đến khi tất cả Specter đã vào trong, nhưng có thể tự vệ.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Sau đó, khi rửa máu khỏi tay mình, bạn nhận ra những thứ trong màn sương muốn gì. May là bạn đã cho chúng vào.',
      },
    ],
    monsters: [
      { name: 'Specters', stats: 'Speed 4 · Sanity 6' },
      { name: 'The Madman', stats: 'Speed 7 · Might 7 · Sanity 7' },
    ],
  },

  12: {
    id: 12,
    title: 'Kẻ Đi Trong Lốt Thịt',
    intro:
      'Haunt này không có kẻ phản bội — chỉ có anh hùng. Tất cả hợp sức để tiêu diệt Evil Twin của mình. Nếu anh hùng của bạn bị giết, bạn vẫn có thể điều khiển Evil Twin của mình và giết các anh hùng khác.',
    sections: [
      {
        heading: 'Nơi Tìm Luật',
        body: 'Phần còn lại của luật cho haunt này nằm trong cuốn Secrets of Survival.',
      },
    ],
    monsters: [],
  },

  13: {
    id: 13,
    title: 'Có Lẽ Sẽ Mơ',
    intro:
      'Cơ thể bạn đã lạc vào một nơi vô cùng tồi tệ — nhưng là nơi bạn có một phần quyền kiểm soát. Hãy chợp mắt; chiếc giường thật êm ái... Đôi mắt của lồng giam bằng thịt khép lại, và đôi mắt tiềm thức của bạn mở ra. Hãy để tiếng gào thét bắt đầu.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Lật ngã quân của bạn trong phòng của nó — cơ thể bạn đang ngủ; bạn không thể di chuyển hay hành động. Bỏ hết item. Để riêng lá Dog/Girl/Madman nếu đang giữ (điều chỉnh chỉ số; bạn không thể bị giết bởi điều này — hạ về mức thấp nhất trên biểu tượng đầu lâu).\nĐặt các token quái vật nhỏ màu tím (Nightmares) bằng số người chơi vào phòng có cơ thể đang ngủ của bạn.\nBí mật đếm các phòng trốn thoát (phòng có cửa sổ hướng ra ngoài + Conservatory, Entrance Hall, Gardens, Graveyard, Patio, Tower, Balcony). Nếu ít hơn số người chơi, hãy rút thêm các phòng như vậy từ chồng cho đến khi bằng nhau, rồi xáo lại. Bí mật ghi con số đó ra. Để riêng bấy nhiêu token trốn thoát.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố đánh thức cơ thể vật chất của bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Số Nightmare trốn thoát bằng số phòng trốn thoát lúc lật haunt. Khi đó hãy cho các anh hùng xem con số bạn đã ghi.',
      },
      {
        heading: 'Cách Nightmare Trốn Thoát',
        body: 'Một Nightmare ở trong phòng trốn thoát sẽ trốn thoát bằng 1 ô di chuyển. Một khi đã dùng, phòng đó không thể dùng lại (đánh dấu nó bằng một token trốn thoát). Các phòng trốn thoát mới có thể được dùng nhưng không làm tăng tổng số cần thiết. Mỗi khi một Nightmare bị giết hoặc trốn thoát, hãy thả thêm một con vào phòng có quân của bạn.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Lũ Nightmare tấn công bằng Might nhưng gây sát thương tinh thần. Nếu một anh hùng đánh bại một Nightmare, nó bị giết (không phải bị choáng); nếu nó bị đánh bại trong khi đang tấn công, nó bị choáng như thường.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn nhìn vào đôi mắt cơ thể mình từ bên ngoài. Lồng giam bằng thịt nhận ra chính tiềm thức của nó và cố gào lên, nhưng âm thanh bị bóp nghẹt bởi những cơn ác mộng sống.',
      },
    ],
    monsters: [{ name: 'Nightmares', stats: 'Speed 5 · Might 4 · Sanity 4' }],
  },

  14: {
    id: 14,
    title: 'Các Vì Sao Đã Đúng Vị',
    intro:
      'Bạn chào đón những tín đồ cuồng nhiệt của giáo phái mình. Bạn giậm chân và tụng niệm, cầu cho lễ hiến tế của mình được chấp nhận đêm nay — cho vị thần kinh hoàng của bạn hiện ra và tắm trong máu bạn bè bạn.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐặt các token quái vật nhỏ màu tím (Cultists) vào Pentagram Chamber với số lượng bằng số người chơi khác.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Cách duy nhất họ ngăn được bạn là làm ô uế Pentagram Chamber bằng các lon sơn (token Paint) giấu khắp nhà.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Hoặc tất cả anh hùng đều chết, hoặc bạn triệu hồi được vị thần.',
      },
      {
        heading: 'Cách Triệu Hồi Vị Thần',
        body: 'Tích lũy 13 điểm hiến tế bằng cách mang vật hiến tế vào Pentagram Chamber: Xác nhà thám hiểm = 4; Girl/Madman/Dog = 2; bất kỳ omen hoặc item trao đổi được nào khác = 1. Các lá đã hiến tế bị loại khỏi ván.\nBạn có thể hiến tế Girl/Madman/Dog khi đang cầm lá đó trong Chamber. Bạn không thể cướp, mang hay hiến tế token Paint.\nCultist có thể mang item và xác (không có lợi ích chỉ số), nhưng không mang token Paint.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Một Cultist có thể cướp một item từ một nhà thám hiểm. Nếu một nhà thám hiểm bị giết, lật ngã quân để đánh dấu cái xác. Một Cultist (hoặc bạn) có thể mang một cái xác như một item, nhưng tốn 2 ô di chuyển để vào một phòng khi đang làm vậy.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Vũ trụ gào thét khi một vết thương xé toạc thời gian và không gian, và vị thần của bạn được tái sinh. Thế giới phơi bày trước ngài, và tất cả những gì trong đó đều là con cái ngài, máu thịt ngài... vật hiến tế của ngài.',
      },
    ],
    monsters: [{ name: 'Cultists', stats: 'Speed 4 · Might 4 · Sanity 4' }],
  },

  15: {
    id: 15,
    title: 'Nơi Đây Có Rồng',
    intro:
      'Bạn chạm vào con rồng phun lửa trong bức tranh của một đứa trẻ. "Ước gì mình có một con rồng." Cửa trước bật tung và một con rồng khổng lồ gầm vang xông vào, khịt ra lửa! "Ăn chúng đi, rồng! Ăn hết bọn chúng!"',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐặt token Dragon lớn hình tròn vào Entrance Hall.\nĐặt một token item hình ngũ giác (Shield) vào Chasm hoặc Crypt và một token khác (Antique Armor) vào Catacombs hoặc Underground Lake (hoặc phòng nào trong số đó được khám phá đầu tiên).\nLấy thanh Lượt/Sát thương và một kẹp (chưa có số) để đếm sát thương.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố giết the Dragon.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết. Sát thương các anh hùng gây cho the Dragon được theo dõi; khi nó bằng số người chơi, the Dragon bị giết. Sát thương không ảnh hưởng đến chỉ số của nó.\nThe Dragon miễn nhiễm với đòn tấn công Speed; nó có thể bị tổn thương bởi đòn tấn công Sanity từ một nhà thám hiểm dùng the Ring.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'The Dragon tấn công hai lần mỗi lượt — một lần phun lửa, một lần cắn (tùy thứ tự).\nPhun Lửa: mỗi nhà thám hiểm (kể cả bạn) ở trong hoặc kề (qua cửa) phòng the Dragon đổ Speed. Trong phòng the Dragon: 4+ không sát thương, 0–3 chịu 4 xúc xắc vật chất. Kề bên: 4+ không sát thương, 0–3 chịu 2 xúc xắc vật chất.\nCắn: một đòn tấn công Might.\nDai Sức: mỗi khi the Dragon bị đánh bại, nó chịu ít hơn 2 sát thương.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn thấy hơi buồn nôn khi con rồng đớp miếng đầu tiên và đốt cháy một người bạn khác như ngọn đuốc. May mà tất cả chỉ là một giấc mơ.',
      },
    ],
    monsters: [{ name: 'The Dragon', stats: 'Speed 3 · Might 8 · Sanity 6' }],
  },

  16: {
    id: 16,
    title: 'Vòng Tay Của Phantom',
    intro:
      'Họ đã cố giành cô gái khỏi tay bạn — sai lầm lớn nhất của họ. Bạn đã triệu hồi một phantom để canh giữ cô, giấu trong nhà. Chẳng mấy chốc, những "người bạn" cũ của bạn sẽ không còn trong tình trạng có thể sai khiến bạn được nữa.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nNhà thám hiểm đang giữ cô Girl mất cô — để riêng lá Girl và một token quái vật màu đỏ tía, và điều chỉnh chỉ số.\nĐể riêng một token quái vật nhỏ màu tím (the Phantom) và ít nhất 20 token đặc trưng.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 0 để đếm thời gian.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố cứu cô Girl và chính họ.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Hoặc bạn cho nổ tung căn nhà trước khi cô Girl trốn thoát, hoặc tất cả anh hùng đều chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Cuối mỗi lượt của mình, nâng thanh Lượt/Sát thương, rồi đổ bấy nhiêu xúc xắc. Căn nhà nổ tung khi: 3 người chơi 8+, 4 người chơi 7+, 5 người chơi 6+, 6 người chơi 5+.\nThe Phantom xuất hiện mỗi khi một phòng tầng hầm có biểu tượng event/omen được khám phá — đặt token Phantom và Girl ở đó cùng một token đặc trưng. Một anh hùng có thể tấn công nó; nếu bị đánh bại, nó bị giết và các anh hùng giành được cô Girl, nếu không thì nó trốn thoát cùng cô (để riêng cả hai) cho đến lần khám phá như vậy kế tiếp. The Phantom không bao giờ lặp lại một phòng cho đến khi mỗi phòng tầng hầm đều có một token đặc trưng.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'The Phantom không tấn công, nhưng nó có thể tự vệ. Nếu phòng thủ thành công, nó bỏ chạy. Các anh hùng không thể dùng đòn tấn công đặc biệt để cướp cô Girl.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Tích, tắc, tích, tắc... BÙM!',
      },
    ],
    monsters: [{ name: 'The Phantom', stats: 'Might 6 · Sanity 5' }],
  },

  17: {
    id: 17,
    title: 'Một Cơn Gió Thoảng',
    intro:
      'Tiếng cười đau đớn cho bạn biết những người đồng hành đã quấy nhiễu người bạn cũ của bạn, con poltergeist. Sự vô tâm của họ thật đáng kinh tởm. Bạn đành phải loại bỏ sự quấy nhiễu này...',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐặt một token quái vật nhỏ màu tím (the Poltergeist) vào phòng nơi lật haunt.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 4.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố trừ tà con Poltergeist.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Giúp Con Poltergeist',
        body: 'Bạn giúp bằng cách tấn công các nhà thám hiểm hoặc tìm/cướp item cho con Poltergeist. Khác với quái vật thông thường, nó có thể nhặt, cướp, trao đổi và bỏ bất kỳ số lượng item nào (bỏ qua hiệu ứng của chúng).\nNó bắt đầu với Might 4. Mỗi lần nó nhặt một item, nâng thanh lên 1. Cuối mỗi lượt quái vật, nếu nó ở trong Junk Room, Storeroom, Attic, Library, Wine Cellar, Research Laboratory, hoặc Operating Laboratory, hãy rút một lá item cho nó và nâng thanh lên 1. Mỗi lần nó mất một item, hạ thanh xuống 1.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Con Poltergeist có thể thực hiện một đòn tấn công Might riêng nhắm vào mỗi anh hùng nó tiếp cận được trong mỗi lượt (mỗi người một lần). Might của nó bằng giá trị thanh hiện tại (tối đa 8). Nó có thể cướp một item (và cộng vào Might của nó) nếu đáng lẽ gây 2+ sát thương. Nó không bị tổn hại nếu anh hùng thắng.\nNó miễn nhiễm với đòn tấn công Might và the Revolver. Nếu Dynamite nổ trong phòng nó, nó bỏ hết item và bị gỡ ra, nhưng có thể tái hợp.',
      },
      {
        heading: 'Tái Hợp Con Poltergeist',
        body: 'Đầu mỗi lượt quái vật, con Poltergeist có thể tái hợp trong bất kỳ phòng omen nào bạn chọn — bỏ các item đang mang, đặt thanh ở mức 3 (hoặc 4 nếu nó tái hợp trong Junk Room) — rồi tiếp tục lượt của nó.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Đám vật thể lơ lửng xoay tròn hân hoan khi kẻ xâm nhập cuối cùng gục ngã. Cuối cùng tất cả đã yên bình, và bạn có thể ngồi xuống trò chuyện đôi câu với người bạn cũ của mình...',
      },
    ],
    monsters: [{ name: 'The Poltergeist', stats: 'Speed 3 · Might X · Sanity 4' }],
  },

  18: {
    id: 18,
    title: 'Đoàn Kết Là Sức Mạnh',
    intro:
      'Cơn đau mang lại sự sáng tỏ. Thịt da yếu đuối, nhưng nó có thể được nặn như sáp. Sáp càng dẻo, bạn càng lớn mạnh. Giờ tất cả những gì bạn cần là thêm thịt. Thật nhiều thịt nữa.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nLấy thanh Lượt/Sát thương và hai kẹp: một kẹp ở hàng trên tại mức 5 (Might mới của bạn), kẹp kia ở hàng dưới tại mức bằng số nhà thám hiểm + 1 (Speed mới của bạn). Các chỉ số tinh thần không đổi.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ muốn nung chảy khối thịt huy hoàng của bạn và trốn thoát qua cửa trước. Bạn có thể dùng sức mạnh kéo họ trở lại.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn giết ít nhất hai anh hùng (hấp thụ họ) và trốn thoát qua cửa trước. Ngoài ra, bạn thắng nếu tất cả anh hùng trừ một người đều chết.',
      },
      {
        heading: 'Luật Di Chuyển Đặc Biệt',
        body: 'Mỗi lượt đổ số xúc xắc bằng Speed của bạn để di chuyển (luôn ít nhất 1 ô).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không chịu sát thương từ các đòn tấn công vật chất. Một anh hùng có the Ring có thể tấn công bạn bằng Sanity; nếu bạn bị đánh bại, họ di chuyển bạn thay vì gây sát thương. Dynamite làm bạn choáng một lượt.\nNếu các anh hùng trốn thoát, bạn có thể kéo họ trở lại từ Entrance Hall, một phòng có cửa sổ hướng ra ngoài, hoặc một phòng mở ra ngoài: đổ Might so với anh hùng ngoài trời mạnh nhất (người đó cộng 1 cho mỗi anh hùng ngoài trời khác). Nếu cao hơn, kéo một anh hùng bạn chọn vào phòng của bạn và tấn công bình thường; lặp lại cho đến khi bạn thất bại.\nNếu bạn giết một anh hùng, hấp thụ họ: +1 Might, −1 Speed.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Thịt, khối thịt huy hoàng! Nó phồng lên trên mọi thớ cơ và lỗ chân lông, hấp thụ ngày càng nhiều nạn nhân. Liệu nó có dừng? Nó có thể dừng không? Bạn chẳng còn quan tâm nữa. Chỉ còn lại thịt.',
      },
    ],
    monsters: [],
  },

  19: {
    id: 19,
    title: 'Người Bạn Trường Tồn',
    intro:
      'Ba thế kỷ trước, một người bạn thân đã tặng bạn bức chân dung lưu giữ bệnh tật, tuổi già, thương tích — và cả đạo đức của bạn. Nó đã chở che bạn khỏi mọi tổn hại. Nhưng giờ nó không còn an toàn nữa; họ muốn có nó. Bạn phải bảo vệ nó bằng mọi giá.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nNâng mọi chỉ số dưới mức khởi đầu về mức khởi đầu.\nSau đó, làm bấy nhiêu lần bằng số anh hùng trong ván: tìm chỉ số ít vượt mức khởi đầu nhất (chỉ số ở mức khởi đầu tính là vượt 0; chọn tùy ý khi hòa) và tăng nó lên 1.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố giết bạn bằng cách vẽ lại bức chân dung của bạn.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn phá hủy ít nhất ba token Paint, hoặc tất cả anh hùng đều chết. Các anh hùng đặt token Paint khắp nhà; chúng có thể được mang/trao đổi/cướp (không phải bởi the Dog), mỗi nhà thám hiểm một cái. Nếu bạn mang một cái trong lượt của mình, bạn có thể phá hủy nó thay vì tấn công.',
      },
      {
        heading: 'Bạn Có Thể Làm Điều Này',
        body: 'Sau khi di chuyển trong lượt của mình, vì đây là nhà của bạn, hãy lục chồng tile phòng, chọn một tile, đặt nó vào bất kỳ vị trí hợp lệ nào, rồi xáo lại.',
      },
      {
        heading: 'Bức Chân Dung Của Bạn',
        body: 'Bạn không được nhìn vào bức chân dung của mình. Mỗi khi bạn đi vào hoặc bắt đầu lượt trong Gallery, đổ Sanity 4+. Nếu thất bại, chịu 1 xúc xắc sát thương tinh thần (bỏ qua sự miễn nhiễm của bạn).',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Bạn không thể bị tổn hại bằng cách thông thường; chỉ số của bạn không thể bị giảm bởi event, đặc tính phòng, hay sát thương trừ khi có quy định khác (Gallery vẫn làm bạn đau). Nhận/mất item thay đổi chỉ số bình thường (không sát thương nếu Blood Dagger bị cướp). Một đối thủ có thể cướp một item từ bạn trong giao tranh vật chất.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Họ không thể làm hại bạn. Bức chân dung vẫn chở che bạn, như bạn đã chở che nó. Tất cả bọn họ tan vỡ trước sức sống vô tận của bạn. Bạn sẽ trường tồn... mãi mãi.',
      },
    ],
    monsters: [],
  },

  20: {
    id: 20,
    title: 'Cô Dâu Ma',
    intro:
      'Một bóng ma trong tấm ren trắng lung linh hiện ra. "Anh đã bỏ em một mình suốt những năm dài ấy, nhưng em vẫn đợi. Đợi đám cưới của chúng ta." Cô lướt về phía một nhà thám hiểm khác: "Một khi anh đã chết như em, chúng ta có thể bên nhau... mãi mãi." Bạn ghét việc tình yêu bị chối từ.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nĐặt một token quái vật màu đỏ tía (the Ghost Bride) vào phòng của bạn (di chuyển nó vào lượt quái vật).\nCô chọn chú rể là anh hùng có the Ring (hoặc anh hùng nam lớn tuổi nhất nếu anh hùng đó là nữ); hãy công bố chú rể. Nếu không có anh hùng nam nào, chọn ngẫu nhiên một người từ hộp và đặt vào Entrance Hall (anh ta không thể hành động nhưng có thể bị tấn công).\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 0.\nNếu Chapel không có trong nhà, hãy tìm nó và đặt sao cho khó đến nhất có thể, rồi xáo lại.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố ngăn đám cưới.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn khiến the Ghost Bride cưới được chú rể đã chọn.\nCô có thể đi xuyên tường (không xuyên sàn/trần) và không thể bị tổn thương hay bị choáng trừ khi bằng đòn tấn công Sanity từ the Ring. Nếu cô tấn công và bị đánh bại, chỉ số của cô không bị giảm.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'The Ghost Bride thực hiện đòn tấn công Sanity (sát thương tinh thần) nhắm vào bất kỳ ai trừ chú rể. Với chú rể, cô giảm Might của anh ta theo sát thương tinh thần: 1–2 → −1; 3–4 → −2; 5+ → −3.',
      },
      {
        heading: 'Cách Cử Hành Đám Cưới Cho Cô Dâu Ma',
        body: 'Giết chú rể đã chọn (anh ta trở thành một bóng ma do bạn điều khiển và bỏ hết item, kể cả the Ring). Đặt chú rể và the Ghost Bride vào Chapel để bắt đầu đám cưới. Cuối mỗi lượt của bạn, nâng thanh (bắt đầu từ 1); đám cưới hoàn tất vào Lượt 3.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Đám cưới lúc nào cũng làm bạn rơi nước mắt.',
      },
    ],
    monsters: [
      { name: 'Ghost Bride (3–4 người chơi)', stats: 'Speed 4 · Sanity 6' },
      { name: 'Ghost Bride (5–6 người chơi)', stats: 'Speed 5 · Sanity 7' },
    ],
  },

  21: {
    id: 21,
    title: 'Ngôi Nhà Của Xác Sống',
    intro:
      'Có thứ gì đó gõ sau bức tường. Một bàn tay xám tro thò ra, bóp lấy cổ bạn, và kéo bạn xuyên qua. Bạn chết trước khi kịp gào lên. Chớp mắt. Hít mũi. "Mmmm, đói." Phải ăn thịt. Giết. Ăn. ĂN!',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn đã chết. Bỏ hết item và thay quân của bạn bằng token Zombie Lord lớn hình tròn.\nLấy các token quái vật nhỏ màu đỏ (Zombies) bằng số người chơi. Đặt chúng, theo thứ tự, vào: Crypt, Graveyard, Entrance Hall, Underground Lake, Gardens, Chapel, Conservatory, Pentagram Chamber (quay vòng với token dư nếu số người chơi nhiều hơn số phòng đã khám phá). Sau đó đặt thêm một Zombie vào mỗi phòng đã có một con.\nLấy thanh Lượt/Sát thương và một kẹp để đếm sát thương.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ sẽ chiến đấu với bạn. Tránh các nhà thám hiểm có vũ khí nếu có thể.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt Của Zombie',
        body: 'Đánh bại một Zombie bằng vũ khí tấn công Might sẽ giết nó; Dynamite cũng giết nó; bất kỳ đòn tấn công nào khác chỉ làm nó choáng. Nếu một anh hùng chết, họ biến thành một Zombie (cùng chỉ số) và người chơi đó vẫn di chuyển nó trong lượt của mình — nếu kẻ phản bội thắng và Zombie đó đã giết một anh hùng, người chơi đó cũng thắng. Lũ Zombie không thể dùng Mystic Elevator, nhưng Zombie Lord thì có thể.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt Của Zombie Lord',
        body: 'Bạn điều khiển Zombie Lord theo luật quái vật thông thường (đổ xúc xắc để di chuyển, không item, không khám phá). Nó chỉ có thể bị tổn hại bởi một nhà thám hiểm đang mang the Medallion; nó chịu sát thương thay vì bị choáng, và 7 điểm thì giết được nó. Sát thương không làm giảm chỉ số của nó.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Mọi người đều đã chết. Vẫn đói. Ngay cả thịt zombie thì cũng vẫn là thịt. Bạn tiến tới. "Mmmm, đói." Phải ăn thịt zombie. Giết. Ăn. ĂN!',
      },
    ],
    monsters: [
      { name: 'Zombies', stats: 'Speed 2 · Might 5 · Sanity 2' },
      { name: 'Zombie Lord', stats: 'Speed 3 · Might 7 · Sanity 2' },
    ],
  },

  22: {
    id: 22,
    title: 'Vực Thẳm Nhìn Lại',
    intro:
      'Bạn đá thêm một lỗ trên sàn và khám phá ra thứ bạn tìm kiếm: Vực Thẳm. Lửa. Một cánh cổng xuống Địa Ngục. "Bám chắc vào, mọi người! Tất cả chúng ta đang xuống ĐỊA NGỤC!" Một phần căn nhà sụp đổ vào một hồ lửa đang cháy.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nChọn bất kỳ phòng tầng hầm không có người nào có biểu tượng omen hoặc event (hoặc rút cho tới phòng tầng hầm hợp lệ đầu tiên và đặt nó). Đây là nơi Vực Thẳm bắt đầu — báo cho mọi người — rồi xáo lại.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 0.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố thực hiện một nghi lễ trừ tà để ngăn căn nhà bị hút vào Vực Thẳm.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Của Mình',
        body: 'Cuối lượt đầu tiên của bạn, căn nhà bắt đầu sụp đổ, bắt đầu từ phòng Vực Thẳm (lật úp các tile). Bạn vẫn làm sụp các phòng (và có thể thắng) kể cả khi đã chết. Cuối mỗi lượt của bạn, nâng thanh (bắt đầu từ 1). Nếu bạn rút một lá event khi đang ở tầng hầm, bạn có thể thay bằng cách lấy lá Secret Stairs hoặc Secret Passage từ chồng event, rồi xáo lại.',
      },
      {
        heading: 'Mỗi Người Chơi Phải Làm Điều Này Mỗi Lượt',
        body: 'Từ Lượt 2, cuối lượt mỗi anh hùng còn sống, người chơi đó làm sụp một phần căn nhà (một phòng phải kề một phòng đã sụp; không cần cửa). Tốc độ: Lượt 2 mỗi người một phòng; Lượt 3 đổ 2 xúc xắc; Lượt 4 đổ 3 xúc xắc; Lượt 5+ đổ 4 xúc xắc. Sụp từng tầng từ dưới lên. Entrance Hall/Foyer/Grand Staircase tính riêng. Một nhà thám hiểm bị kẹt khi Vực Thẳm nuốt chửng một phòng sẽ đổ Speed 4+ để nhảy sang một phòng kề chưa sụp có cửa, nếu không thì bị giết.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Địa Ngục chào đón bạn. Khi thịt da các bạn bè cháy sém khỏi xương, bạn cố mỉm cười — nhưng chính da bạn cũng bong tróc trong ngọn lửa thiêu rụi tất cả. Thấy sự bốc đồng đem lại gì cho bạn chưa?',
      },
    ],
    monsters: [],
  },

  23: {
    id: 23,
    title: 'Quái Vật Xúc Tu',
    intro:
      'Những đoạn cơ thịt dài ngoằng quẫy đạp vào tầm nhìn, phủ đầy những giác hút lách cách. Một đoạn cao su cứa vào chi của bạn và cuốn bạn xuyên qua căn nhà. Bạn gào lên lần cuối khi đám xúc tu tìm kiếm thêm nạn nhân.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn đã chết. Gỡ quân của bạn ra và bỏ hết item.\nĐể riêng các cặp token đánh số gồm quái vật màu cam (Arms) và xanh lá (Suckers) với số lượng bằng số người chơi; mỗi cặp là một Tentacle. Đặt một Arm vào bất kỳ phòng Tentacle nào (Furnace Room, Conservatory, Organ Room, Underground Lake, Gardens, Chasm), thêm phòng nếu cần. Đặt một Sucker vào mỗi phòng có Arm.\nThiết lập thanh Lượt/Sát thương với kẹp ở mức 1 để đếm thời gian.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang tìm cái Head của sinh vật để giết nó. Bạn phải ngăn họ.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Cuối mỗi lượt của mình, nâng thanh Lượt/Sát thương. Lũ Tentacle mạnh dần theo thời gian: L1–2 Spd2/Mgt4/San7, L3–4 Spd3/Mgt5/San7, L5–7 Spd3/Mgt7/San7, L8+ Spd4/Mgt8/San8. Cái Head của sinh vật (Might 6) có thể tấn công anh hùng và không chịu sát thương khi bị đánh bại. Nếu một Sucker đi vào Mystic Elevator, thang sẽ không hoạt động; Arm không làm chậm anh hùng, Sucker thì có.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Arm không di chuyển và không tấn công/bị tấn công; Sucker thì có thể. Một Sucker đánh bại một anh hùng sẽ tóm họ (không sát thương; anh hùng bỏ hết item) và kết thúc di chuyển của nó. Một Sucker đang tóm di chuyển 2 ô về phía Arm của nó mỗi lượt (không thể tấn công). Một anh hùng ở Arm tương ứng vào đầu lượt quái vật sẽ bị ăn và bị giết (gỡ Tentacle đó ra). Một Sucker bị đánh bại sẽ bị choáng, rút lui, và thả anh hùng ra. The Bell không có tác dụng với anh hùng đang bị tóm; the Spirit Board không có tác dụng với Sucker.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Thứ ngồi xổm ở trung tâm căn nhà hút tủy từ các nạn nhân và rung lên hân hoan. Đã mạnh hơn trước, nó vươn những xúc tu xa hơn bao giờ hết... ra ngoài cửa trước.',
      },
    ],
    monsters: [
      { name: 'Suckers', stats: 'Chỉ số thay đổi theo lượt (xem bảng)' },
      { name: 'Head', stats: 'Might 6' },
    ],
  },

  24: {
    id: 24,
    title: 'Bay Về Nhà',
    intro:
      'Một âm thanh xào xạc như giấy nhám lớn dần bên ngoài cửa sổ. Vô số đôi mắt đỏ phát sáng nhìn chằm chằm vào bạn. Những giọt máu rơi từ mắt bạn — đây chính là mục đích cả đời bạn: cho chủ nhân của bạn vào và hiến dâng máu mình cho chúng. Bạn mở toang cửa sổ.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn đã chết. Gỡ quân của bạn ra.\nĐể riêng 24 token quái vật nhỏ màu đỏ (Bats). Đặt 3 con vào Tower hoặc Attic và 3 con vào Chasm hoặc Catacombs (ít Bat hơn nếu các phòng đó chưa được khám phá).',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố tìm cách xua đuổi lũ Bat.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Tất cả anh hùng đều chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này Trong Lượt Mỗi Anh Hùng',
        body: 'Vào đầu lượt của họ, một anh hùng chịu 1 điểm sát thương vật chất cho mỗi token Bat trên lá nhân vật của họ.',
      },
      {
        heading: 'Lũ Bat Vào Nhà',
        body: 'Trong lượt quái vật, đổ số xúc xắc bằng số người chơi và để riêng bấy nhiêu Bat. Lũ Bat vào qua Tower, Chasm, Conservatory, Entrance Hall, Gardens, Graveyard, Patio, Balcony, và các phòng có cửa sổ hướng ra ngoài (mỗi phòng một con trừ khi số Bat nhiều hơn số phòng). Vào nhà tính là di chuyển 1 ô; Bat có thể tiếp tục di chuyển. Tối đa 24 Bat trong nhà cùng lúc.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Lũ Bat không tấn công theo cách thông thường — đổ 1 xúc xắc cho mỗi Bat đang tấn công một anh hùng; ra mặt 2 thì nó bám vào (đặt token lên lá nhân vật của anh hùng đó). Bat chưa bám không ảnh hưởng đến di chuyển; mỗi Bat đã bám khiến anh hùng đó di chuyển ít hơn 1 ô (tối thiểu 1).',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Tiếng vỗ cánh xào xạc nhỏ dần khi bình minh ló rạng và lũ dơi hút máu về tổ. Bên dưới chúng nằm những cái xác khô quắt của các bình chứa thức ăn, gia nhập cùng vô số kẻ đã hiến máu cho các chúa dơi của dinh thự.',
      },
    ],
    monsters: [{ name: 'Bats', stats: 'Speed 5 · Might 2 · Sanity 1' }],
  },

  25: {
    id: 25,
    title: 'Bùa Ngải Voodoo',
    intro:
      'Đã đến lúc mọi chiếc mặt nạ phải rơi xuống. Bạn đã thu thập tinh chất của từng người bạn, khâu nên hình nộm của họ, và đặt khắp căn nhà. Bạn bè bạn đều ở đây — cùng tất cả những con búp bê của họ. Việc đầu tiên trước tiên: có chút bùa ngải voodoo phải làm.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội. Thiết lập thanh Lượt/Sát thương với kẹp ở mức 0.\nDùng "Mô Tả Búp Bê Voodoo," chọn một con búp bê cho mỗi anh hùng. Trên giấy, bí mật ghi lại búp bê nào ứng với anh hùng nào và nó nằm trong phòng nào trong hai phòng của nó (phải chọn phòng đã khám phá nếu chỉ có một phòng được khám phá). Sau đó đọc cho mỗi anh hùng câu nói của búp bê của họ.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố tìm các con búp bê và phá hủy chúng.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Hơn một nửa số anh hùng bắt đầu haunt đã chết.',
      },
      {
        heading: 'Bạn Phải Làm Điều Này',
        body: 'Cuối mỗi lượt của mình, nâng thanh (bắt đầu từ 1). Bất kỳ con búp bê nào chưa bị phá hủy sẽ ảnh hưởng đến anh hùng của nó ngay lúc này — đọc to câu hiệu ứng của nó.',
      },
      {
        heading: 'Mô Tả Búp Bê Voodoo',
        body: 'Wax Doll: Furnace Room hoặc Kitchen.\nChina Doll: Balcony hoặc Tower.\nStone Doll: Underground Lake hoặc Graveyard.\nGlass Doll: Pentagram Chamber hoặc Chapel.\nRag Doll: Gardens hoặc Conservatory.',
      },
      {
        heading: 'Hiệu Ứng Búp Bê Voodoo',
        body: 'Wax Doll: anh hùng chịu 1 điểm sát thương vật chất.\nChina Doll: đổ 4 xúc xắc; nếu nhỏ hơn số lượt, búp bê vỡ tan, giết anh hùng.\nStone Doll: anh hùng đổ Might; nếu nhỏ hơn số lượt, họ mất 1 ở mỗi chỉ số.\nGlass Doll: anh hùng chịu 1 điểm sát thương tinh thần.\nRag Doll: anh hùng đổ Knowledge; nếu nhỏ hơn số lượt, họ chịu 2 điểm sát thương vật chất.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Bạn vạch một nét đỏ rực qua từng tấm ảnh đã dán vào nhật ký trước khi đến đây. Cảm giác mãn nguyện chẳng bao giờ kéo dài. Đã đến lúc tìm bạn bè mới.',
      },
    ],
    monsters: [],
  },

  26: {
    id: 26,
    title: 'Trả Giá Cho Người Thổi Sáo',
    intro:
      'Giờ lúc nào bạn cũng nghe thấy tiếng loẹt xoẹt, sột soạt, cào cấu. Lũ chuột trong tường. Những giọng thì thầm của chúng hứa hẹn tình bạn và lòng tận tụy — bởi bạn là cùng dòng giống với chúng, một wererat với năng lực đặc biệt. Chúng vạch rõ điều bạn phải làm.',
    sections: [
      {
        heading: 'Ngay Lúc Này',
        body: 'Nhà thám hiểm của bạn trở thành kẻ phản bội.\nKhôi phục mọi chỉ số dưới mức khởi đầu, sau đó cộng 1 vào mỗi chỉ số.\nĐể riêng các token quái vật nhỏ màu đỏ (Rats) với số lượng bằng hai lần số người chơi. Đặt một Rat vào mỗi phòng không có người có biểu tượng omen hoặc event (nhân đôi/chọn lựa khi cần).\nĐể riêng 5 token Sanity Roll hình tam giác.',
      },
      {
        heading: 'Điều Bạn Biết Về Phe Anh Hùng',
        body: 'Họ đang cố giết hết lũ Rat, điều này sẽ ngăn bạn hoàn thành nghi lễ chuột-quái của mình.',
      },
      {
        heading: 'Bạn Thắng Khi',
        body: 'Bạn hoặc giết tất cả anh hùng hoặc hoàn thành nghi lễ của mình.',
      },
      {
        heading: 'Luật Tấn Công Đặc Biệt',
        body: 'Một Rat bị đánh bại sẽ bị giết (không phải bị choáng). Một nhóm Rat trong một phòng có thể tấn công cùng nhau, cộng dồn Might của chúng (tối đa 8 xúc xắc); một đòn tấn công nhóm thất bại sẽ không chịu sát thương. Khi ở trong Pentagram Chamber bạn không thể bị các anh hùng ảnh hưởng; cả Rat lẫn anh hùng đều không thể vào đó.',
      },
      {
        heading: 'Cách Hoàn Thành Nghi Lễ',
        body: 'Di chuyển tới Pentagram Chamber (an toàn ở đó). Mỗi lượt, đổ Sanity 3+ để thực hiện nghi lễ; khi thành công đặt một token Sanity Roll lên lá của bạn và một Rat vào một phòng kề Chamber (không cần cửa). Số lần đổ cần: 3–4 người chơi 5; 5–6 người chơi 4.',
      },
      {
        heading: 'Nếu Bạn Thắng',
        body: 'Những đứa con đáng yêu của bạn liếm sạch máu vương vãi và giành nhau những miếng to hơn. Trẻ con thì vẫn là trẻ con — và trẻ con thì cần được ăn.',
      },
    ],
    monsters: [{ name: 'Rats', stats: 'Speed 3 · Might 2 · Sanity 1' }],
  },
};
