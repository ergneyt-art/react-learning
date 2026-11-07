
interface HeaderLocalization {
    searchPlaceholder: string;
    signInButtonTitle: string;
    signUpButtonTitle: string;
    signOutButtonTitle: string;
    changeThemeButtonTitle: string;
}

interface FooterLocalization {
    copyright: string;
}

interface ArticleData {
    id: string;
    title: string;
    topics: ArticleText[];
}

interface ArticleText {
      title: string;
      content: {
        subTitle?: string;
        text: string;
      }[];    
}

interface Localization {
  key: string;
  leftPaneTitle: string;
  rightPaneTitle: string;
  header: HeaderLocalization;
  articles: ArticleData[];
  footer: FooterLocalization;
}

const eng: Localization = {
  key: "eng",
  leftPaneTitle: "Articles",
  rightPaneTitle: "Table of Contents",
  header: {
    searchPlaceholder: "Search...",
    signInButtonTitle: "Sign In",
    signUpButtonTitle: "Sign Up",
    signOutButtonTitle: "Sign Out",
    changeThemeButtonTitle: "Change Theme",
  },
  articles: [
    {
      id: "article-1",
      title: "Article 1",
      topics: [
        {
          title: "Topic 1",
          content: [
            {
              text: "Mauris aliquam, dui eget venenatis semper, leo quam venenatis magna, ac porttitor tortor metus in ipsum. Nam facilisis nulla in purus lobortis suscipit. Nunc non justo purus. Aliquam porta lectus mollis finibus euismod. Nunc purus nisi, imperdiet eget risus sed, vestibulum placerat leo. Sed sed tortor vitae lorem pretium congue condimentum at neque. Duis cursus consequat semper. Integer nec tortor pharetra, laoreet quam vel, pharetra libero. Mauris et egestas mauris. Proin sem justo, egestas at ultrices vitae, viverra eu diam. Nunc vel sodales metus. Sed sodales nec leo quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan sit amet felis a ornare. Mauris semper diam ac diam volutpat, vel tempor sem scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            },
            {
              subTitle: "Subtopic 1",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nulla in aliquet tincidunt. Ut vel tortor purus. Curabitur bibendum lectus turpis, ac commodo tortor venenatis tristique. Phasellus blandit eros eget dui varius facilisis. Integer vestibulum elementum elit et finibus. Integer vel aliquam augue, id venenatis nisl. Mauris nec pellentesque nulla. Sed pulvinar, odio sed fringilla cursus, massa felis gravida elit, ut maximus enim lectus id risus. Nunc sagittis interdum tortor, a vestibulum risus mattis vel. Vivamus vitae augue vitae ligula accumsan ornare. In sit amet lorem porta orci placerat suscipit. Aenean vel arcu augue. Nullam id accumsan erat. Integer non molestie nisl. Nulla elementum, tortor sit amet accumsan placerat, ante lectus commodo magna, et rutrum elit libero et nulla.",
            },
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis facilisis sapien, vitae elementum purus. Nullam volutpat nulla dignissim, tempor diam tempor, maximus lectus. Phasellus vitae porttitor odio. Ut aliquet ipsum at augue fringilla, ac vulputate orci convallis. Suspendisse at ligula est. Nulla hendrerit, turpis ultricies facilisis tempus, tellus justo sagittis mauris, ac egestas elit velit nec arcu. Curabitur tempor nibh aliquam, facilisis lacus ut, ultricies massa. In bibendum vitae sapien sit amet pellentesque. Proin sed finibus mauris, vel facilisis leo. In a augue venenatis, efficitur nulla rhoncus, cursus tellus. Phasellus ut congue ex.",
            },
            {
              text: "Praesent id mi orci. Pellentesque ut nulla a purus elementum blandit sed et velit. Suspendisse eget tortor tellus. In hac habitasse platea dictumst. Nullam non elit ante. Vestibulum fermentum efficitur turpis quis cursus. Etiam euismod quam lorem, sed pretium lacus convallis sed.",
            },
            {
              text: "Cras non mattis libero. Phasellus ligula ipsum, feugiat vel tortor vitae, tempor varius quam. Donec fringilla viverra enim sit amet tempus. Fusce consectetur diam mauris, vel semper ex vehicula at. Quisque faucibus ornare finibus. Sed eleifend nisl a risus consequat tincidunt. Fusce fringilla auctor lobortis. Ut congue sem eget aliquam imperdiet. Phasellus luctus, dui ac lobortis aliquam, tellus nisl tempor lacus, eget auctor mi lorem ac orci. Nam pellentesque dui vitae malesuada faucibus. Praesent sodales nisi ipsum, at dapibus ante porta sed. Donec egestas purus erat, eu molestie leo sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tempor dolor, et malesuada sapien. Maecenas luctus gravida lectus sed placerat.",
            },
            {
              subTitle: "Subtopic 2",
              text: "Etiam porta eleifend pulvinar. Nullam ullamcorper ullamcorper viverra. Vestibulum egestas imperdiet auctor. Mauris congue nisi sit amet cursus iaculis. Proin aliquet aliquet magna, nec laoreet lacus lobortis nec. Maecenas malesuada quis enim vitae maximus. Etiam in egestas dui. Nam nisl arcu, posuere eu venenatis quis, vehicula sit amet ligula. Aliquam dictum et magna nec ornare.",
            },
            {
              text: "Praesent ut congue nibh, eu tempus arcu. Pellentesque lacinia tortor a fringilla ultricies. Sed varius ullamcorper augue non dignissim. Sed volutpat ultricies ante, eu tempor odio venenatis eu. Donec ornare lectus id quam ultricies, eu feugiat risus commodo. Integer non velit dapibus, luctus urna non, finibus diam. Pellentesque viverra nibh in erat mollis, non lobortis velit semper. Aenean magna nisl, feugiat sit amet aliquet et, accumsan sed justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at sollicitudin risus. Aliquam erat volutpat. Aliquam diam nunc, hendrerit suscipit convallis et, gravida vitae ipsum. Praesent purus dolor, iaculis quis viverra in, rhoncus vitae dui. Aenean sit amet feugiat enim.",
            },
          ],
        },
        {
          title: "Topic 2",
          content: [
            {
              text: "Nullam vulputate malesuada tortor et tincidunt. Donec tincidunt, ligula vitae eleifend tincidunt, arcu sem rhoncus purus, sed sollicitudin metus orci nec orci. Nunc rutrum elementum tellus sit amet vestibulum. Fusce non nibh ut neque iaculis aliquam. Morbi sollicitudin, erat ac dictum semper, nunc enim auctor purus, id ultricies lectus erat malesuada nunc. Aliquam finibus aliquet velit at molestie. Curabitur dictum ipsum lorem, in dignissim erat gravida interdum. Morbi rhoncus bibendum hendrerit. Pellentesque vel leo tempus, rhoncus metus in, rutrum ex. Vivamus non velit eget magna dignissim pretium. Integer nunc orci, mollis id enim nec, posuere tempus magna. Sed quis ipsum sapien. Quisque feugiat nisi sit amet tempor varius. Quisque feugiat ullamcorper eros eu interdum. Curabitur vitae rutrum eros, sit amet tincidunt sem.",
            },
            {
              text: "Etiam sodales hendrerit arcu facilisis maximus. Maecenas vel efficitur odio. Nulla ac nisi quam. Morbi convallis et tellus nec consectetur. Quisque fringilla turpis elit, sed cursus elit tempor in. Sed finibus ipsum et ornare maximus. Duis et nibh feugiat, placerat urna eu, rhoncus metus. Sed dui lacus, tempor et elit nec, bibendum fermentum lacus. Cras at congue turpis. Suspendisse potenti. Nulla ac ipsum accumsan, volutpat purus ut, tristique augue. Nunc eu odio enim.",
            },
            {
              text: "Phasellus luctus neque massa, ac egestas erat vestibulum vel. Sed rhoncus imperdiet placerat. Donec bibendum sem sed tincidunt pharetra. In eget aliquam quam. Pellentesque placerat pellentesque erat nec dignissim. Nullam ante enim, mattis eu venenatis id, scelerisque ac purus. In hac habitasse platea dictumst. Fusce tincidunt lacus et diam sollicitudin, at sagittis tortor consectetur. Etiam sit amet dui at quam dictum gravida. Donec dolor sem, porttitor quis commodo a, laoreet et ligula. In egestas neque vel lectus congue, ac porta mauris ornare. Nullam tincidunt lectus quam, ut tincidunt felis rutrum eu. Nullam at tincidunt metus, bibendum suscipit dui. Phasellus dolor risus, vehicula nec neque ut, dignissim pretium massa. Integer a justo odio.",
            },
            {
              text: "Mauris vitae tempor ante. Donec iaculis nisl placerat mi tempus, non molestie ligula porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mi sit amet ipsum sodales imperdiet vel vel lectus. Maecenas mauris magna, auctor et sem eget, condimentum mattis odio. Morbi laoreet turpis luctus lectus egestas euismod. Vestibulum tempus ornare metus quis euismod. Pellentesque vitae hendrerit metus. Integer nec erat eu est auctor mattis id sed eros.",
            },
          ],
        },
        {
          title: "Topic 3",
          content: [
            {
              text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            },
            {
              subTitle: "Subtopic 1",
              text: "Donec sit amet commodo augue, sit amet commodo dolor. Sed id hendrerit erat. Vestibulum purus leo, pharetra non vehicula ac, elementum in nisi. Donec fringilla efficitur rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec mauris et leo gravida porta. Maecenas tristique lectus a libero aliquet, non rutrum tortor finibus. In mauris libero, consectetur at ultricies tempor, molestie a est. Nullam imperdiet augue vitae purus iaculis malesuada.",
            },
            {
              text: "Sed viverra erat nec nisi molestie, sit amet efficitur dui ullamcorper. Aliquam nec nulla leo. Ut tempus arcu risus, vitae scelerisque arcu ultricies in. Proin vitae fermentum mi. Phasellus commodo egestas nunc et volutpat. Cras nulla tortor, dignissim ac lectus sit amet, pellentesque placerat quam. Aenean luctus quam bibendum nulla hendrerit rhoncus. Fusce quam nibh, ultrices ac justo vel, vehicula faucibus dui. Ut feugiat placerat eros, eget sodales sem faucibus vitae. Integer iaculis mauris leo, id dictum lorem bibendum vel. Etiam et metus tempus, sollicitudin tellus vel, sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna non libero iaculis imperdiet sed et tortor. In dui nisl, semper sit amet nisi sed, aliquam dapibus est.",
            },
            {
              text: "Vivamus augue magna, lobortis id ex et, semper ultricies dui. Ut dolor sem, placerat at pharetra quis, varius at enim. In facilisis erat eu lectus posuere sagittis ut a sapien. Nullam lacinia lacus nec faucibus egestas. Etiam faucibus vel purus ac bibendum. Vestibulum ipsum massa, suscipit ac condimentum vitae, consequat sit amet felis. Integer libero orci, volutpat nec diam quis, ultrices mattis ligula. Donec at iaculis tellus. Quisque venenatis mi vel condimentum porta. Praesent eu gravida metus. Vestibulum quis porta mauris.",
            },
            {
              subTitle: "Subtopic 2",
              text: "Vivamus urna turpis, imperdiet nec pretium at, commodo id libero. Donec vel ex sodales, feugiat erat nec, lobortis ex. Maecenas odio neque, viverra a consectetur quis, feugiat eu urna. Nunc vitae placerat ante, at tempor velit. Curabitur eros leo, consequat a sapien ac, iaculis lacinia elit. In et aliquam justo. Duis nisi tortor, tempus ac venenatis nec, fermentum in augue.",
            },
            {
              text: "Aliquam eu tristique turpis. Vivamus porta ex sit amet tellus euismod euismod. Nullam nec justo libero. Vestibulum accumsan ipsum ex, nec commodo purus posuere id. Sed elementum augue sapien, vulputate pretium ante pellentesque iaculis. Vivamus mauris nunc, vehicula sit amet dui id, bibendum consectetur odio. Maecenas non elementum magna. Praesent at mi in metus tempus lobortis. Nunc ligula mauris, molestie eu sapien eu, viverra dictum massa.",
            },
            {
              subTitle: "Subtopic 3",
              text: "Mauris sollicitudin consectetur enim sed venenatis. Aliquam luctus urna vel magna efficitur rhoncus. Maecenas sed quam sapien. Nullam eget felis sit amet nibh vehicula bibendum vehicula non lacus. Sed facilisis congue ex, ut viverra sapien finibus id. Suspendisse sed ligula vulputate, egestas magna nec, luctus nibh. Ut vitae eros non nibh dignissim mattis. In quis enim ac eros egestas luctus quis eu arcu. Duis facilisis urna nisi, ut dictum justo scelerisque sit amet. Ut fringilla viverra congue. Ut dapibus odio at arcu volutpat sodales. Morbi dignissim, lorem at pulvinar tincidunt, lectus orci scelerisque nisl, sed eleifend ipsum dui sed est. Cras lorem diam, mollis vitae dolor quis, aliquet rhoncus neque. Nulla elementum elementum purus a consequat. Ut eu metus pharetra, fermentum velit a, rhoncus velit.",
            },
            {
              subTitle: "Subtopic 4",
              text: "Donec malesuada sit amet erat vitae pulvinar. Mauris cursus hendrerit justo sit amet pulvinar. Donec ultricies ex eget eros elementum, vitae lacinia lacus tristique. Fusce sodales ornare nibh nec vestibulum. Vestibulum ultricies dui vitae ex dictum, sit amet fermentum ipsum fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent euismod efficitur tellus. Vivamus arcu nulla, dapibus vitae pretium vitae, consectetur a turpis. Aliquam sed varius neque, sit amet posuere dolor. Pellentesque ornare tristique justo, in pretium risus ultricies sed. Nam sed sapien in nisl blandit dapibus posuere vel ipsum. Aliquam vitae mi non augue eleifend venenatis nec sit amet tortor. Fusce mattis orci cursus semper bibendum. Praesent feugiat consectetur dolor, sit amet lobortis turpis rutrum et. In suscipit, augue nec ullamcorper commodo, eros metus lacinia augue, quis suscipit leo massa non ligula. Donec faucibus interdum sagittis.",
            },
            {
              text: "Etiam aliquet efficitur pellentesque. Sed vehicula euismod mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet ex vel sapien feugiat aliquam. In sed metus pulvinar, pretium neque eu, cursus mi. Etiam ac ornare ante. Nam et nisl risus. Aenean ullamcorper erat eu metus aliquam iaculis. Nullam mattis ligula eleifend turpis tincidunt, dignissim congue ligula finibus. In at euismod justo. Ut porttitor pretium nibh, non malesuada felis. Mauris ut est tellus. Suspendisse at est non risus volutpat tempus. Nunc viverra in est eu ullamcorper. Quisque aliquam tortor mi, in pharetra nibh malesuada sed.",
            },
            {
              subTitle: "Subtopic 5",
              text: "Nam eu efficitur nisl, sit amet semper turpis. Proin quis rhoncus leo. Nunc eget orci pharetra, facilisis sapien et, vehicula tellus. Donec aliquam interdum diam sed venenatis. Nullam ut mi ac lectus malesuada accumsan. In quis mi blandit, tempus ex nec, dapibus purus. Duis maximus finibus neque, imperdiet faucibus mauris maximus sit amet. Maecenas sollicitudin eros ut erat pretium, a volutpat lectus blandit. In posuere finibus porttitor. Praesent varius, sapien vel eleifend gravida, mi orci suscipit massa, vel condimentum tellus neque vitae enim.",
            },
            {
              text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. In hac habitasse platea dictumst. Sed iaculis feugiat bibendum. Suspendisse vel egestas justo, non malesuada libero. Aenean tincidunt ullamcorper nunc, ut blandit odio posuere sit amet. Sed at lorem augue. Sed sodales est vel felis finibus finibus. Sed ac tellus non orci faucibus ullamcorper non ac enim. Fusce sed lectus sodales arcu rutrum scelerisque. Mauris turpis elit, dapibus et egestas nec, lobortis sed lectus. Pellentesque venenatis non nunc ac pretium. In pretium vitae velit eget bibendum.",
            },
            {
              text: "Nulla rhoncus dictum viverra. Fusce semper faucibus justo, in blandit nulla mollis id. Nunc quis nulla non dui commodo ultrices. Aenean malesuada erat nec ex vehicula rhoncus. Nam lacinia, lectus sed laoreet commodo, massa metus tincidunt velit, vel feugiat urna est a tortor. Vivamus non gravida metus. Aliquam in condimentum elit. Maecenas a est malesuada, bibendum lacus et, vestibulum est. Etiam pulvinar pretium arcu, non commodo nisi hendrerit a. Fusce placerat odio vitae mi tempus, sed auctor eros mattis. Aenean fringilla viverra libero, vitae posuere metus tempor vitae. Donec vel bibendum nulla, sed interdum mauris. Duis a lectus mattis, vulputate massa sit amet, mollis nibh.",
            },
          ],
        },
      ],
    },
    {
      id: "article-2",
      title: "Article 2",
      topics: [
        {
          title: "Topic 1",
          content: [
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nulla in aliquet tincidunt. Ut vel tortor purus. Curabitur bibendum lectus turpis, ac commodo tortor venenatis tristique. Phasellus blandit eros eget dui varius facilisis. Integer vestibulum elementum elit et finibus. Integer vel aliquam augue, id venenatis nisl. Mauris nec pellentesque nulla. Sed pulvinar, odio sed fringilla cursus, massa felis gravida elit, ut maximus enim lectus id risus. Nunc sagittis interdum tortor, a vestibulum risus mattis vel. Vivamus vitae augue vitae ligula accumsan ornare. In sit amet lorem porta orci placerat suscipit. Aenean vel arcu augue. Nullam id accumsan erat. Integer non molestie nisl.",
            },
            {
              text: "Suspendisse vitae risus ac nunc bibendum sollicitudin. Donec condimentum nibh ante, faucibus sodales ex commodo ut. Quisque accumsan lobortis sapien, eget varius nunc vehicula consequat. Nulla fringilla elit a pulvinar finibus. In elementum, odio eu semper pretium, dolor diam vulputate purus, at commodo eros diam ut felis. Sed facilisis tempor ante id finibus. Fusce blandit ex id odio lobortis, ut suscipit enim eleifend. Duis id consectetur nisl, ut blandit elit. Etiam efficitur ultricies semper. Suspendisse vehicula scelerisque fermentum. Phasellus viverra urna ac accumsan euismod. Cras scelerisque, justo quis tristique tincidunt, nulla mi faucibus purus, at ullamcorper ipsum ex ut magna. Ut rutrum gravida tellus ut varius.",
            },
            {
              subTitle: "Subtopic 1",
              text: "Donec rutrum ligula eu erat laoreet, ut molestie orci posuere. Morbi ac viverra mi. Maecenas dui risus, bibendum fringilla fermentum sit amet, pulvinar eget orci. Vivamus non est maximus, iaculis diam ut, consectetur sem. Nunc a sapien id lectus condimentum lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eu pretium nunc, eget sollicitudin nibh.",
            },
            {
              text: "In vel suscipit dui. Morbi efficitur erat est, aliquam facilisis nulla sollicitudin eget. Aenean posuere eros commodo faucibus cursus. Proin gravida aliquam augue, id ullamcorper nisi congue ut. Donec euismod porta nulla at tristique. Quisque at vehicula est. In suscipit gravida metus lobortis elementum. Praesent ac neque ligula.",
            },
            {
              text: "Donec eget euismod lorem. Nunc imperdiet arcu et diam efficitur sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sapien erat, congue ut enim at, dapibus finibus lorem. Praesent sodales nec ligula non bibendum. Ut et magna pretium, sodales purus ac, vestibulum mauris. Proin eget nisl in augue malesuada rutrum sit amet rutrum est. Praesent rutrum mauris eu eros pulvinar, at posuere erat pulvinar. Curabitur eget felis non ligula tempus pretium ac sed neque. Aliquam at orci aliquet, congue felis sit amet, dictum metus. Suspendisse luctus imperdiet diam quis viverra.",
            },
          ],
        },
        {
          title: "Topic 2",
          content: [
            {
              text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            },
            {
              subTitle: "Subtopic 1",
              text: "Donec sit amet commodo augue, sit amet commodo dolor. Sed id hendrerit erat. Vestibulum purus leo, pharetra non vehicula ac, elementum in nisi. Donec fringilla efficitur rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec mauris et leo gravida porta. Maecenas tristique lectus a libero aliquet, non rutrum tortor finibus. In mauris libero, consectetur at ultricies tempor, molestie a est. Nullam imperdiet augue vitae purus iaculis malesuada.",
            },
            {
              text: "Sed viverra erat nec nisi molestie, sit amet efficitur dui ullamcorper. Aliquam nec nulla leo. Ut tempus arcu risus, vitae scelerisque arcu ultricies in. Proin vitae fermentum mi. Phasellus commodo egestas nunc et volutpat. Cras nulla tortor, dignissim ac lectus sit amet, pellentesque placerat quam. Aenean luctus quam bibendum nulla hendrerit rhoncus. Fusce quam nibh, ultrices ac justo vel, vehicula faucibus dui. Ut feugiat placerat eros, eget sodales sem faucibus vitae. Integer iaculis mauris leo, id dictum lorem bibendum vel. Etiam et metus tempus, sollicitudin tellus vel, sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna non libero iaculis imperdiet sed et tortor. In dui nisl, semper sit amet nisi sed, aliquam dapibus est.",
            },
            {
              text: "Vivamus augue magna, lobortis id ex et, semper ultricies dui. Ut dolor sem, placerat at pharetra quis, varius at enim. In facilisis erat eu lectus posuere sagittis ut a sapien. Nullam lacinia lacus nec faucibus egestas. Etiam faucibus vel purus ac bibendum. Vestibulum ipsum massa, suscipit ac condimentum vitae, consequat sit amet felis. Integer libero orci, volutpat nec diam quis, ultrices mattis ligula. Donec at iaculis tellus. Quisque venenatis mi vel condimentum porta. Praesent eu gravida metus. Vestibulum quis porta mauris.",
            },
            {
              subTitle: "Subtopic 2",
              text: "Vivamus urna turpis, imperdiet nec pretium at, commodo id libero. Donec vel ex sodales, feugiat erat nec, lobortis ex. Maecenas odio neque, viverra a consectetur quis, feugiat eu urna. Nunc vitae placerat ante, at tempor velit. Curabitur eros leo, consequat a sapien ac, iaculis lacinia elit. In et aliquam justo. Duis nisi tortor, tempus ac venenatis nec, fermentum in augue.",
            },
            {
              text: "Aliquam eu tristique turpis. Vivamus porta ex sit amet tellus euismod euismod. Nullam nec justo libero. Vestibulum accumsan ipsum ex, nec commodo purus posuere id. Sed elementum augue sapien, vulputate pretium ante pellentesque iaculis. Vivamus mauris nunc, vehicula sit amet dui id, bibendum consectetur odio. Maecenas non elementum magna. Praesent at mi in metus tempus lobortis. Nunc ligula mauris, molestie eu sapien eu, viverra dictum massa.",
            },
            {
              subTitle: "Subtopic 3",
              text: "Mauris sollicitudin consectetur enim sed venenatis. Aliquam luctus urna vel magna efficitur rhoncus. Maecenas sed quam sapien. Nullam eget felis sit amet nibh vehicula bibendum vehicula non lacus. Sed facilisis congue ex, ut viverra sapien finibus id. Suspendisse sed ligula vulputate, egestas magna nec, luctus nibh. Ut vitae eros non nibh dignissim mattis. In quis enim ac eros egestas luctus quis eu arcu. Duis facilisis urna nisi, ut dictum justo scelerisque sit amet. Ut fringilla viverra congue. Ut dapibus odio at arcu volutpat sodales. Morbi dignissim, lorem at pulvinar tincidunt, lectus orci scelerisque nisl, sed eleifend ipsum dui sed est. Cras lorem diam, mollis vitae dolor quis, aliquet rhoncus neque. Nulla elementum elementum purus a consequat. Ut eu metus pharetra, fermentum velit a, rhoncus velit.",
            },
            {
              subTitle: "Subtopic 4",
              text: "Donec malesuada sit amet erat vitae pulvinar. Mauris cursus hendrerit justo sit amet pulvinar. Donec ultricies ex eget eros elementum, vitae lacinia lacus tristique. Fusce sodales ornare nibh nec vestibulum. Vestibulum ultricies dui vitae ex dictum, sit amet fermentum ipsum fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent euismod efficitur tellus. Vivamus arcu nulla, dapibus vitae pretium vitae, consectetur a turpis. Aliquam sed varius neque, sit amet posuere dolor. Pellentesque ornare tristique justo, in pretium risus ultricies sed. Nam sed sapien in nisl blandit dapibus posuere vel ipsum. Aliquam vitae mi non augue eleifend venenatis nec sit amet tortor. Fusce mattis orci cursus semper bibendum. Praesent feugiat consectetur dolor, sit amet lobortis turpis rutrum et. In suscipit, augue nec ullamcorper commodo, eros metus lacinia augue, quis suscipit leo massa non ligula. Donec faucibus interdum sagittis.",
            },
            {
              text: "Etiam aliquet efficitur pellentesque. Sed vehicula euismod mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet ex vel sapien feugiat aliquam. In sed metus pulvinar, pretium neque eu, cursus mi. Etiam ac ornare ante. Nam et nisl risus. Aenean ullamcorper erat eu metus aliquam iaculis. Nullam mattis ligula eleifend turpis tincidunt, dignissim congue ligula finibus. In at euismod justo. Ut porttitor pretium nibh, non malesuada felis. Mauris ut est tellus. Suspendisse at est non risus volutpat tempus. Nunc viverra in est eu ullamcorper. Quisque aliquam tortor mi, in pharetra nibh malesuada sed.",
            },
            {
              subTitle: "Subtopic 5",
              text: "Nam eu efficitur nisl, sit amet semper turpis. Proin quis rhoncus leo. Nunc eget orci pharetra, facilisis sapien et, vehicula tellus. Donec aliquam interdum diam sed venenatis. Nullam ut mi ac lectus malesuada accumsan. In quis mi blandit, tempus ex nec, dapibus purus. Duis maximus finibus neque, imperdiet faucibus mauris maximus sit amet. Maecenas sollicitudin eros ut erat pretium, a volutpat lectus blandit. In posuere finibus porttitor. Praesent varius, sapien vel eleifend gravida, mi orci suscipit massa, vel condimentum tellus neque vitae enim.",
            },
            {
              text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. In hac habitasse platea dictumst. Sed iaculis feugiat bibendum. Suspendisse vel egestas justo, non malesuada libero. Aenean tincidunt ullamcorper nunc, ut blandit odio posuere sit amet. Sed at lorem augue. Sed sodales est vel felis finibus finibus. Sed ac tellus non orci faucibus ullamcorper non ac enim. Fusce sed lectus sodales arcu rutrum scelerisque. Mauris turpis elit, dapibus et egestas nec, lobortis sed lectus. Pellentesque venenatis non nunc ac pretium. In pretium vitae velit eget bibendum.",
            },
            {
              text: "Nulla rhoncus dictum viverra. Fusce semper faucibus justo, in blandit nulla mollis id. Nunc quis nulla non dui commodo ultrices. Aenean malesuada erat nec ex vehicula rhoncus. Nam lacinia, lectus sed laoreet commodo, massa metus tincidunt velit, vel feugiat urna est a tortor. Vivamus non gravida metus. Aliquam in condimentum elit. Maecenas a est malesuada, bibendum lacus et, vestibulum est. Etiam pulvinar pretium arcu, non commodo nisi hendrerit a. Fusce placerat odio vitae mi tempus, sed auctor eros mattis. Aenean fringilla viverra libero, vitae posuere metus tempor vitae. Donec vel bibendum nulla, sed interdum mauris. Duis a lectus mattis, vulputate massa sit amet, mollis nibh.",
            },
          ],
        },
      ],
    },
    {
      id: "article-3",
      title: "Article 3",
      topics: [
        {
          title: "Topic 1",
          content: [
            {
              text: "Mauris aliquam, dui eget venenatis semper, leo quam venenatis magna, ac porttitor tortor metus in ipsum. Nam facilisis nulla in purus lobortis suscipit. Nunc non justo purus. Aliquam porta lectus mollis finibus euismod. Nunc purus nisi, imperdiet eget risus sed, vestibulum placerat leo. Sed sed tortor vitae lorem pretium congue condimentum at neque. Duis cursus consequat semper. Integer nec tortor pharetra, laoreet quam vel, pharetra libero. Mauris et egestas mauris. Proin sem justo, egestas at ultrices vitae, viverra eu diam. Nunc vel sodales metus. Sed sodales nec leo quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan sit amet felis a ornare. Mauris semper diam ac diam volutpat, vel tempor sem scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            },
            {
              subTitle: "Subtopic 1",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nulla in aliquet tincidunt. Ut vel tortor purus. Curabitur bibendum lectus turpis, ac commodo tortor venenatis tristique. Phasellus blandit eros eget dui varius facilisis. Integer vestibulum elementum elit et finibus. Integer vel aliquam augue, id venenatis nisl. Mauris nec pellentesque nulla. Sed pulvinar, odio sed fringilla cursus, massa felis gravida elit, ut maximus enim lectus id risus. Nunc sagittis interdum tortor, a vestibulum risus mattis vel. Vivamus vitae augue vitae ligula accumsan ornare. In sit amet lorem porta orci placerat suscipit. Aenean vel arcu augue. Nullam id accumsan erat. Integer non molestie nisl. Nulla elementum, tortor sit amet accumsan placerat, ante lectus commodo magna, et rutrum elit libero et nulla.",
            },
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis facilisis sapien, vitae elementum purus. Nullam volutpat nulla dignissim, tempor diam tempor, maximus lectus. Phasellus vitae porttitor odio. Ut aliquet ipsum at augue fringilla, ac vulputate orci convallis. Suspendisse at ligula est. Nulla hendrerit, turpis ultricies facilisis tempus, tellus justo sagittis mauris, ac egestas elit velit nec arcu. Curabitur tempor nibh aliquam, facilisis lacus ut, ultricies massa. In bibendum vitae sapien sit amet pellentesque. Proin sed finibus mauris, vel facilisis leo. In a augue venenatis, efficitur nulla rhoncus, cursus tellus. Phasellus ut congue ex.",
            },
            {
              text: "Praesent id mi orci. Pellentesque ut nulla a purus elementum blandit sed et velit. Suspendisse eget tortor tellus. In hac habitasse platea dictumst. Nullam non elit ante. Vestibulum fermentum efficitur turpis quis cursus. Etiam euismod quam lorem, sed pretium lacus convallis sed.",
            },
            {
              text: "Cras non mattis libero. Phasellus ligula ipsum, feugiat vel tortor vitae, tempor varius quam. Donec fringilla viverra enim sit amet tempus. Fusce consectetur diam mauris, vel semper ex vehicula at. Quisque faucibus ornare finibus. Sed eleifend nisl a risus consequat tincidunt. Fusce fringilla auctor lobortis. Ut congue sem eget aliquam imperdiet. Phasellus luctus, dui ac lobortis aliquam, tellus nisl tempor lacus, eget auctor mi lorem ac orci. Nam pellentesque dui vitae malesuada faucibus. Praesent sodales nisi ipsum, at dapibus ante porta sed. Donec egestas purus erat, eu molestie leo sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tempor dolor, et malesuada sapien. Maecenas luctus gravida lectus sed placerat.",
            },
            {
              subTitle: "Subtopic 2",
              text: "Etiam porta eleifend pulvinar. Nullam ullamcorper ullamcorper viverra. Vestibulum egestas imperdiet auctor. Mauris congue nisi sit amet cursus iaculis. Proin aliquet aliquet magna, nec laoreet lacus lobortis nec. Maecenas malesuada quis enim vitae maximus. Etiam in egestas dui. Nam nisl arcu, posuere eu venenatis quis, vehicula sit amet ligula. Aliquam dictum et magna nec ornare.",
            },
            {
              text: "Praesent ut congue nibh, eu tempus arcu. Pellentesque lacinia tortor a fringilla ultricies. Sed varius ullamcorper augue non dignissim. Sed volutpat ultricies ante, eu tempor odio venenatis eu. Donec ornare lectus id quam ultricies, eu feugiat risus commodo. Integer non velit dapibus, luctus urna non, finibus diam. Pellentesque viverra nibh in erat mollis, non lobortis velit semper. Aenean magna nisl, feugiat sit amet aliquet et, accumsan sed justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at sollicitudin risus. Aliquam erat volutpat. Aliquam diam nunc, hendrerit suscipit convallis et, gravida vitae ipsum. Praesent purus dolor, iaculis quis viverra in, rhoncus vitae dui. Aenean sit amet feugiat enim.",
            },
          ],
        },
        {
          title: "Topic 2",
          content: [
            {
              text: "Nullam vulputate malesuada tortor et tincidunt. Donec tincidunt, ligula vitae eleifend tincidunt, arcu sem rhoncus purus, sed sollicitudin metus orci nec orci. Nunc rutrum elementum tellus sit amet vestibulum. Fusce non nibh ut neque iaculis aliquam. Morbi sollicitudin, erat ac dictum semper, nunc enim auctor purus, id ultricies lectus erat malesuada nunc. Aliquam finibus aliquet velit at molestie. Curabitur dictum ipsum lorem, in dignissim erat gravida interdum. Morbi rhoncus bibendum hendrerit. Pellentesque vel leo tempus, rhoncus metus in, rutrum ex. Vivamus non velit eget magna dignissim pretium. Integer nunc orci, mollis id enim nec, posuere tempus magna. Sed quis ipsum sapien. Quisque feugiat nisi sit amet tempor varius. Quisque feugiat ullamcorper eros eu interdum. Curabitur vitae rutrum eros, sit amet tincidunt sem.",
            },
            {
              text: "Etiam sodales hendrerit arcu facilisis maximus. Maecenas vel efficitur odio. Nulla ac nisi quam. Morbi convallis et tellus nec consectetur. Quisque fringilla turpis elit, sed cursus elit tempor in. Sed finibus ipsum et ornare maximus. Duis et nibh feugiat, placerat urna eu, rhoncus metus. Sed dui lacus, tempor et elit nec, bibendum fermentum lacus. Cras at congue turpis. Suspendisse potenti. Nulla ac ipsum accumsan, volutpat purus ut, tristique augue. Nunc eu odio enim.",
            },
            {
              text: "Phasellus luctus neque massa, ac egestas erat vestibulum vel. Sed rhoncus imperdiet placerat. Donec bibendum sem sed tincidunt pharetra. In eget aliquam quam. Pellentesque placerat pellentesque erat nec dignissim. Nullam ante enim, mattis eu venenatis id, scelerisque ac purus. In hac habitasse platea dictumst. Fusce tincidunt lacus et diam sollicitudin, at sagittis tortor consectetur. Etiam sit amet dui at quam dictum gravida. Donec dolor sem, porttitor quis commodo a, laoreet et ligula. In egestas neque vel lectus congue, ac porta mauris ornare. Nullam tincidunt lectus quam, ut tincidunt felis rutrum eu. Nullam at tincidunt metus, bibendum suscipit dui. Phasellus dolor risus, vehicula nec neque ut, dignissim pretium massa. Integer a justo odio.",
            },
            {
              text: "Mauris vitae tempor ante. Donec iaculis nisl placerat mi tempus, non molestie ligula porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mi sit amet ipsum sodales imperdiet vel vel lectus. Maecenas mauris magna, auctor et sem eget, condimentum mattis odio. Morbi laoreet turpis luctus lectus egestas euismod. Vestibulum tempus ornare metus quis euismod. Pellentesque vitae hendrerit metus. Integer nec erat eu est auctor mattis id sed eros.",
            },
          ],
        },
        {
          title: "Topic 3",
          content: [
            {
              text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            },
            {
              subTitle: "Subtopic 1",
              text: "Donec sit amet commodo augue, sit amet commodo dolor. Sed id hendrerit erat. Vestibulum purus leo, pharetra non vehicula ac, elementum in nisi. Donec fringilla efficitur rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec mauris et leo gravida porta. Maecenas tristique lectus a libero aliquet, non rutrum tortor finibus. In mauris libero, consectetur at ultricies tempor, molestie a est. Nullam imperdiet augue vitae purus iaculis malesuada.",
            },
            {
              text: "Sed viverra erat nec nisi molestie, sit amet efficitur dui ullamcorper. Aliquam nec nulla leo. Ut tempus arcu risus, vitae scelerisque arcu ultricies in. Proin vitae fermentum mi. Phasellus commodo egestas nunc et volutpat. Cras nulla tortor, dignissim ac lectus sit amet, pellentesque placerat quam. Aenean luctus quam bibendum nulla hendrerit rhoncus. Fusce quam nibh, ultrices ac justo vel, vehicula faucibus dui. Ut feugiat placerat eros, eget sodales sem faucibus vitae. Integer iaculis mauris leo, id dictum lorem bibendum vel. Etiam et metus tempus, sollicitudin tellus vel, sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna non libero iaculis imperdiet sed et tortor. In dui nisl, semper sit amet nisi sed, aliquam dapibus est.",
            },
            {
              text: "Vivamus augue magna, lobortis id ex et, semper ultricies dui. Ut dolor sem, placerat at pharetra quis, varius at enim. In facilisis erat eu lectus posuere sagittis ut a sapien. Nullam lacinia lacus nec faucibus egestas. Etiam faucibus vel purus ac bibendum. Vestibulum ipsum massa, suscipit ac condimentum vitae, consequat sit amet felis. Integer libero orci, volutpat nec diam quis, ultrices mattis ligula. Donec at iaculis tellus. Quisque venenatis mi vel condimentum porta. Praesent eu gravida metus. Vestibulum quis porta mauris.",
            },
            {
              subTitle: "Subtopic 2",
              text: "Vivamus urna turpis, imperdiet nec pretium at, commodo id libero. Donec vel ex sodales, feugiat erat nec, lobortis ex. Maecenas odio neque, viverra a consectetur quis, feugiat eu urna. Nunc vitae placerat ante, at tempor velit. Curabitur eros leo, consequat a sapien ac, iaculis lacinia elit. In et aliquam justo. Duis nisi tortor, tempus ac venenatis nec, fermentum in augue.",
            },
            {
              text: "Aliquam eu tristique turpis. Vivamus porta ex sit amet tellus euismod euismod. Nullam nec justo libero. Vestibulum accumsan ipsum ex, nec commodo purus posuere id. Sed elementum augue sapien, vulputate pretium ante pellentesque iaculis. Vivamus mauris nunc, vehicula sit amet dui id, bibendum consectetur odio. Maecenas non elementum magna. Praesent at mi in metus tempus lobortis. Nunc ligula mauris, molestie eu sapien eu, viverra dictum massa.",
            },
            {
              subTitle: "Subtopic 3",
              text: "Mauris sollicitudin consectetur enim sed venenatis. Aliquam luctus urna vel magna efficitur rhoncus. Maecenas sed quam sapien. Nullam eget felis sit amet nibh vehicula bibendum vehicula non lacus. Sed facilisis congue ex, ut viverra sapien finibus id. Suspendisse sed ligula vulputate, egestas magna nec, luctus nibh. Ut vitae eros non nibh dignissim mattis. In quis enim ac eros egestas luctus quis eu arcu. Duis facilisis urna nisi, ut dictum justo scelerisque sit amet. Ut fringilla viverra congue. Ut dapibus odio at arcu volutpat sodales. Morbi dignissim, lorem at pulvinar tincidunt, lectus orci scelerisque nisl, sed eleifend ipsum dui sed est. Cras lorem diam, mollis vitae dolor quis, aliquet rhoncus neque. Nulla elementum elementum purus a consequat. Ut eu metus pharetra, fermentum velit a, rhoncus velit.",
            },
            {
              subTitle: "Subtopic 4",
              text: "Donec malesuada sit amet erat vitae pulvinar. Mauris cursus hendrerit justo sit amet pulvinar. Donec ultricies ex eget eros elementum, vitae lacinia lacus tristique. Fusce sodales ornare nibh nec vestibulum. Vestibulum ultricies dui vitae ex dictum, sit amet fermentum ipsum fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent euismod efficitur tellus. Vivamus arcu nulla, dapibus vitae pretium vitae, consectetur a turpis. Aliquam sed varius neque, sit amet posuere dolor. Pellentesque ornare tristique justo, in pretium risus ultricies sed. Nam sed sapien in nisl blandit dapibus posuere vel ipsum. Aliquam vitae mi non augue eleifend venenatis nec sit amet tortor. Fusce mattis orci cursus semper bibendum. Praesent feugiat consectetur dolor, sit amet lobortis turpis rutrum et. In suscipit, augue nec ullamcorper commodo, eros metus lacinia augue, quis suscipit leo massa non ligula. Donec faucibus interdum sagittis.",
            },
            {
              text: "Etiam aliquet efficitur pellentesque. Sed vehicula euismod mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet ex vel sapien feugiat aliquam. In sed metus pulvinar, pretium neque eu, cursus mi. Etiam ac ornare ante. Nam et nisl risus. Aenean ullamcorper erat eu metus aliquam iaculis. Nullam mattis ligula eleifend turpis tincidunt, dignissim congue ligula finibus. In at euismod justo. Ut porttitor pretium nibh, non malesuada felis. Mauris ut est tellus. Suspendisse at est non risus volutpat tempus. Nunc viverra in est eu ullamcorper. Quisque aliquam tortor mi, in pharetra nibh malesuada sed.",
            },
            {
              subTitle: "Subtopic 5",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nulla in aliquet tincidunt. Ut vel tortor purus. Curabitur bibendum lectus turpis, ac commodo tortor venenatis tristique. Phasellus blandit eros eget dui varius facilisis. Integer vestibulum elementum elit et finibus. Integer vel aliquam augue, id venenatis nisl. Mauris nec pellentesque nulla. Sed pulvinar, odio sed fringilla cursus, massa felis gravida elit, ut maximus enim lectus id risus. Nunc sagittis interdum tortor, a vestibulum risus mattis vel. Vivamus vitae augue vitae ligula accumsan ornare. In sit amet lorem porta orci placerat suscipit. Aenean vel arcu augue. Nullam id accumsan erat. Integer non molestie nisl. Nulla elementum, tortor sit amet accumsan placerat, ante lectus commodo magna, et rutrum elit libero et nulla.",
            },
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis facilisis sapien, vitae elementum purus. Nullam volutpat nulla dignissim, tempor diam tempor, maximus lectus. Phasellus vitae porttitor odio. Ut aliquet ipsum at augue fringilla, ac vulputate orci convallis. Suspendisse at ligula est. Nulla hendrerit, turpis ultricies facilisis tempus, tellus justo sagittis mauris, ac egestas elit velit nec arcu. Curabitur tempor nibh aliquam, facilisis lacus ut, ultricies massa. In bibendum vitae sapien sit amet pellentesque. Proin sed finibus mauris, vel facilisis leo. In a augue venenatis, efficitur nulla rhoncus, cursus tellus. Phasellus ut congue ex.",
            },
            {
              text: "Praesent id mi orci. Pellentesque ut nulla a purus elementum blandit sed et velit. Suspendisse eget tortor tellus. In hac habitasse platea dictumst. Nullam non elit ante. Vestibulum fermentum efficitur turpis quis cursus. Etiam euismod quam lorem, sed pretium lacus convallis sed.",
            },
            {
              text: "Cras non mattis libero. Phasellus ligula ipsum, feugiat vel tortor vitae, tempor varius quam. Donec fringilla viverra enim sit amet tempus. Fusce consectetur diam mauris, vel semper ex vehicula at. Quisque faucibus ornare finibus. Sed eleifend nisl a risus consequat tincidunt. Fusce fringilla auctor lobortis. Ut congue sem eget aliquam imperdiet. Phasellus luctus, dui ac lobortis aliquam, tellus nisl tempor lacus, eget auctor mi lorem ac orci. Nam pellentesque dui vitae malesuada faucibus. Praesent sodales nisi ipsum, at dapibus ante porta sed. Donec egestas purus erat, eu molestie leo sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tempor dolor, et malesuada sapien. Maecenas luctus gravida lectus sed placerat.",
            },
            {
              subTitle: "Subtopic 6",
              text: "Donec malesuada sit amet erat vitae pulvinar. Mauris cursus hendrerit justo sit amet pulvinar. Donec ultricies ex eget eros elementum, vitae lacinia lacus tristique. Fusce sodales ornare nibh nec vestibulum. Vestibulum ultricies dui vitae ex dictum, sit amet fermentum ipsum fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent euismod efficitur tellus. Vivamus arcu nulla, dapibus vitae pretium vitae, consectetur a turpis. Aliquam sed varius neque, sit amet posuere dolor. Pellentesque ornare tristique justo, in pretium risus ultricies sed. Nam sed sapien in nisl blandit dapibus posuere vel ipsum. Aliquam vitae mi non augue eleifend venenatis nec sit amet tortor. Fusce mattis orci cursus semper bibendum. Praesent feugiat consectetur dolor, sit amet lobortis turpis rutrum et. In suscipit, augue nec ullamcorper commodo, eros metus lacinia augue, quis suscipit leo massa non ligula. Donec faucibus interdum sagittis.",
            },
            {
              text: "Etiam aliquet efficitur pellentesque. Sed vehicula euismod mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet ex vel sapien feugiat aliquam. In sed metus pulvinar, pretium neque eu, cursus mi. Etiam ac ornare ante. Nam et nisl risus. Aenean ullamcorper erat eu metus aliquam iaculis. Nullam mattis ligula eleifend turpis tincidunt, dignissim congue ligula finibus. In at euismod justo. Ut porttitor pretium nibh, non malesuada felis. Mauris ut est tellus. Suspendisse at est non risus volutpat tempus. Nunc viverra in est eu ullamcorper. Quisque aliquam tortor mi, in pharetra nibh malesuada sed.",
            },
            {
              subTitle: "Subtopic 7",
              text: "Nam eu efficitur nisl, sit amet semper turpis. Proin quis rhoncus leo. Nunc eget orci pharetra, facilisis sapien et, vehicula tellus. Donec aliquam interdum diam sed venenatis. Nullam ut mi ac lectus malesuada accumsan. In quis mi blandit, tempus ex nec, dapibus purus. Duis maximus finibus neque, imperdiet faucibus mauris maximus sit amet. Maecenas sollicitudin eros ut erat pretium, a volutpat lectus blandit. In posuere finibus porttitor. Praesent varius, sapien vel eleifend gravida, mi orci suscipit massa, vel condimentum tellus neque vitae enim.",
            },
            {
              text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. In hac habitasse platea dictumst. Sed iaculis feugiat bibendum. Suspendisse vel egestas justo, non malesuada libero. Aenean tincidunt ullamcorper nunc, ut blandit odio posuere sit amet. Sed at lorem augue. Sed sodales est vel felis finibus finibus. Sed ac tellus non orci faucibus ullamcorper non ac enim. Fusce sed lectus sodales arcu rutrum scelerisque. Mauris turpis elit, dapibus et egestas nec, lobortis sed lectus. Pellentesque venenatis non nunc ac pretium. In pretium vitae velit eget bibendum.",
            },
            {
              text: "Nulla rhoncus dictum viverra. Fusce semper faucibus justo, in blandit nulla mollis id. Nunc quis nulla non dui commodo ultrices. Aenean malesuada erat nec ex vehicula rhoncus. Nam lacinia, lectus sed laoreet commodo, massa metus tincidunt velit, vel feugiat urna est a tortor. Vivamus non gravida metus. Aliquam in condimentum elit. Maecenas a est malesuada, bibendum lacus et, vestibulum est. Etiam pulvinar pretium arcu, non commodo nisi hendrerit a. Fusce placerat odio vitae mi tempus, sed auctor eros mattis. Aenean fringilla viverra libero, vitae posuere metus tempor vitae. Donec vel bibendum nulla, sed interdum mauris. Duis a lectus mattis, vulputate massa sit amet, mollis nibh.",
            },
          ],
        },
        {
          title: "Topic 4",
          content: [
            {
              text: "Donec sit amet commodo augue, sit amet commodo dolor. Sed id hendrerit erat. Vestibulum purus leo, pharetra non vehicula ac, elementum in nisi. Donec fringilla efficitur rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec mauris et leo gravida porta. Maecenas tristique lectus a libero aliquet, non rutrum tortor finibus. In mauris libero, consectetur at ultricies tempor, molestie a est. Nullam imperdiet augue vitae purus iaculis malesuada.",
            },
            {
              text: "Sed viverra erat nec nisi molestie, sit amet efficitur dui ullamcorper. Aliquam nec nulla leo. Ut tempus arcu risus, vitae scelerisque arcu ultricies in. Proin vitae fermentum mi. Phasellus commodo egestas nunc et volutpat. Cras nulla tortor, dignissim ac lectus sit amet, pellentesque placerat quam. Aenean luctus quam bibendum nulla hendrerit rhoncus. Fusce quam nibh, ultrices ac justo vel, vehicula faucibus dui. Ut feugiat placerat eros, eget sodales sem faucibus vitae. Integer iaculis mauris leo, id dictum lorem bibendum vel. Etiam et metus tempus, sollicitudin tellus vel, sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna non libero iaculis imperdiet sed et tortor. In dui nisl, semper sit amet nisi sed, aliquam dapibus est.",
            },
            {
              text: "Vivamus augue magna, lobortis id ex et, semper ultricies dui. Ut dolor sem, placerat at pharetra quis, varius at enim. In facilisis erat eu lectus posuere sagittis ut a sapien. Nullam lacinia lacus nec faucibus egestas. Etiam faucibus vel purus ac bibendum. Vestibulum ipsum massa, suscipit ac condimentum vitae, consequat sit amet felis. Integer libero orci, volutpat nec diam quis, ultrices mattis ligula. Donec at iaculis tellus. Quisque venenatis mi vel condimentum porta. Praesent eu gravida metus. Vestibulum quis porta mauris.",
            },
            {
              text: "Vivamus urna turpis, imperdiet nec pretium at, commodo id libero. Donec vel ex sodales, feugiat erat nec, lobortis ex. Maecenas odio neque, viverra a consectetur quis, feugiat eu urna. Nunc vitae placerat ante, at tempor velit. Curabitur eros leo, consequat a sapien ac, iaculis lacinia elit. In et aliquam justo. Duis nisi tortor, tempus ac venenatis nec, fermentum in augue.",
            },
          ],
        },
      ],
    },
  ],
  footer: {
    copyright: "Copyright © 2023 My Website. All rights reserved.",
  },
};

const ru: Localization = {
  key: "ru",
  header: {
    searchPlaceholder: "Искать...",
    signInButtonTitle: "Войти",
    signUpButtonTitle: "Регистрация",
    signOutButtonTitle: "Выйти",
    changeThemeButtonTitle: "Сменить тему",
  },
  leftPaneTitle: "Статьи",
  rightPaneTitle: "Содержание",
   articles: [
    {
      id: "article-1",
      title: "Статья 1",
      topics: [
        {
          title: "Заголовок 1",
          content: [
            {
              text: "Mauris aliquam, dui eget venenatis semper, leo quam venenatis magna, ac porttitor tortor metus in ipsum. Nam facilisis nulla in purus lobortis suscipit. Nunc non justo purus. Aliquam porta lectus mollis finibus euismod. Nunc purus nisi, imperdiet eget risus sed, vestibulum placerat leo. Sed sed tortor vitae lorem pretium congue condimentum at neque. Duis cursus consequat semper. Integer nec tortor pharetra, laoreet quam vel, pharetra libero. Mauris et egestas mauris. Proin sem justo, egestas at ultrices vitae, viverra eu diam. Nunc vel sodales metus. Sed sodales nec leo quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan sit amet felis a ornare. Mauris semper diam ac diam volutpat, vel tempor sem scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            },
            {
              subTitle: "Подзаголовок 1",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nulla in aliquet tincidunt. Ut vel tortor purus. Curabitur bibendum lectus turpis, ac commodo tortor venenatis tristique. Phasellus blandit eros eget dui varius facilisis. Integer vestibulum elementum elit et finibus. Integer vel aliquam augue, id venenatis nisl. Mauris nec pellentesque nulla. Sed pulvinar, odio sed fringilla cursus, massa felis gravida elit, ut maximus enim lectus id risus. Nunc sagittis interdum tortor, a vestibulum risus mattis vel. Vivamus vitae augue vitae ligula accumsan ornare. In sit amet lorem porta orci placerat suscipit. Aenean vel arcu augue. Nullam id accumsan erat. Integer non molestie nisl. Nulla elementum, tortor sit amet accumsan placerat, ante lectus commodo magna, et rutrum elit libero et nulla.",
            },
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis facilisis sapien, vitae elementum purus. Nullam volutpat nulla dignissim, tempor diam tempor, maximus lectus. Phasellus vitae porttitor odio. Ut aliquet ipsum at augue fringilla, ac vulputate orci convallis. Suspendisse at ligula est. Nulla hendrerit, turpis ultricies facilisis tempus, tellus justo sagittis mauris, ac egestas elit velit nec arcu. Curabitur tempor nibh aliquam, facilisis lacus ut, ultricies massa. In bibendum vitae sapien sit amet pellentesque. Proin sed finibus mauris, vel facilisis leo. In a augue venenatis, efficitur nulla rhoncus, cursus tellus. Phasellus ut congue ex.",
            },
            {
              text: "Praesent id mi orci. Pellentesque ut nulla a purus elementum blandit sed et velit. Suspendisse eget tortor tellus. In hac habitasse platea dictumst. Nullam non elit ante. Vestibulum fermentum efficitur turpis quis cursus. Etiam euismod quam lorem, sed pretium lacus convallis sed.",
            },
            {
              text: "Cras non mattis libero. Phasellus ligula ipsum, feugiat vel tortor vitae, tempor varius quam. Donec fringilla viverra enim sit amet tempus. Fusce consectetur diam mauris, vel semper ex vehicula at. Quisque faucibus ornare finibus. Sed eleifend nisl a risus consequat tincidunt. Fusce fringilla auctor lobortis. Ut congue sem eget aliquam imperdiet. Phasellus luctus, dui ac lobortis aliquam, tellus nisl tempor lacus, eget auctor mi lorem ac orci. Nam pellentesque dui vitae malesuada faucibus. Praesent sodales nisi ipsum, at dapibus ante porta sed. Donec egestas purus erat, eu molestie leo sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tempor dolor, et malesuada sapien. Maecenas luctus gravida lectus sed placerat.",
            },
            {
              subTitle: "Подзаголовок 2",
              text: "Etiam porta eleifend pulvinar. Nullam ullamcorper ullamcorper viverra. Vestibulum egestas imperdiet auctor. Mauris congue nisi sit amet cursus iaculis. Proin aliquet aliquet magna, nec laoreet lacus lobortis nec. Maecenas malesuada quis enim vitae maximus. Etiam in egestas dui. Nam nisl arcu, posuere eu venenatis quis, vehicula sit amet ligula. Aliquam dictum et magna nec ornare.",
            },
            {
              text: "Praesent ut congue nibh, eu tempus arcu. Pellentesque lacinia tortor a fringilla ultricies. Sed varius ullamcorper augue non dignissim. Sed volutpat ultricies ante, eu tempor odio venenatis eu. Donec ornare lectus id quam ultricies, eu feugiat risus commodo. Integer non velit dapibus, luctus urna non, finibus diam. Pellentesque viverra nibh in erat mollis, non lobortis velit semper. Aenean magna nisl, feugiat sit amet aliquet et, accumsan sed justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at sollicitudin risus. Aliquam erat volutpat. Aliquam diam nunc, hendrerit suscipit convallis et, gravida vitae ipsum. Praesent purus dolor, iaculis quis viverra in, rhoncus vitae dui. Aenean sit amet feugiat enim.",
            },
          ],
        },
        {
          title: "Заголовок 2",
          content: [
            {
              text: "Nullam vulputate malesuada tortor et tincidunt. Donec tincidunt, ligula vitae eleifend tincidunt, arcu sem rhoncus purus, sed sollicitudin metus orci nec orci. Nunc rutrum elementum tellus sit amet vestibulum. Fusce non nibh ut neque iaculis aliquam. Morbi sollicitudin, erat ac dictum semper, nunc enim auctor purus, id ultricies lectus erat malesuada nunc. Aliquam finibus aliquet velit at molestie. Curabitur dictum ipsum lorem, in dignissim erat gravida interdum. Morbi rhoncus bibendum hendrerit. Pellentesque vel leo tempus, rhoncus metus in, rutrum ex. Vivamus non velit eget magna dignissim pretium. Integer nunc orci, mollis id enim nec, posuere tempus magna. Sed quis ipsum sapien. Quisque feugiat nisi sit amet tempor varius. Quisque feugiat ullamcorper eros eu interdum. Curabitur vitae rutrum eros, sit amet tincidunt sem.",
            },
            {
              text: "Etiam sodales hendrerit arcu facilisis maximus. Maecenas vel efficitur odio. Nulla ac nisi quam. Morbi convallis et tellus nec consectetur. Quisque fringilla turpis elit, sed cursus elit tempor in. Sed finibus ipsum et ornare maximus. Duis et nibh feugiat, placerat urna eu, rhoncus metus. Sed dui lacus, tempor et elit nec, bibendum fermentum lacus. Cras at congue turpis. Suspendisse potenti. Nulla ac ipsum accumsan, volutpat purus ut, tristique augue. Nunc eu odio enim.",
            },
            {
              text: "Phasellus luctus neque massa, ac egestas erat vestibulum vel. Sed rhoncus imperdiet placerat. Donec bibendum sem sed tincidunt pharetra. In eget aliquam quam. Pellentesque placerat pellentesque erat nec dignissim. Nullam ante enim, mattis eu venenatis id, scelerisque ac purus. In hac habitasse platea dictumst. Fusce tincidunt lacus et diam sollicitudin, at sagittis tortor consectetur. Etiam sit amet dui at quam dictum gravida. Donec dolor sem, porttitor quis commodo a, laoreet et ligula. In egestas neque vel lectus congue, ac porta mauris ornare. Nullam tincidunt lectus quam, ut tincidunt felis rutrum eu. Nullam at tincidunt metus, bibendum suscipit dui. Phasellus dolor risus, vehicula nec neque ut, dignissim pretium massa. Integer a justo odio.",
            },
            {
              text: "Mauris vitae tempor ante. Donec iaculis nisl placerat mi tempus, non molestie ligula porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mi sit amet ipsum sodales imperdiet vel vel lectus. Maecenas mauris magna, auctor et sem eget, condimentum mattis odio. Morbi laoreet turpis luctus lectus egestas euismod. Vestibulum tempus ornare metus quis euismod. Pellentesque vitae hendrerit metus. Integer nec erat eu est auctor mattis id sed eros.",
            },
          ],
        },
        {
          title: "Заголовок 3",
          content: [
            {
              text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            },
            {
              subTitle: "Подзаголовок 1",
              text: "Donec sit amet commodo augue, sit amet commodo dolor. Sed id hendrerit erat. Vestibulum purus leo, pharetra non vehicula ac, elementum in nisi. Donec fringilla efficitur rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec mauris et leo gravida porta. Maecenas tristique lectus a libero aliquet, non rutrum tortor finibus. In mauris libero, consectetur at ultricies tempor, molestie a est. Nullam imperdiet augue vitae purus iaculis malesuada.",
            },
            {
              text: "Sed viverra erat nec nisi molestie, sit amet efficitur dui ullamcorper. Aliquam nec nulla leo. Ut tempus arcu risus, vitae scelerisque arcu ultricies in. Proin vitae fermentum mi. Phasellus commodo egestas nunc et volutpat. Cras nulla tortor, dignissim ac lectus sit amet, pellentesque placerat quam. Aenean luctus quam bibendum nulla hendrerit rhoncus. Fusce quam nibh, ultrices ac justo vel, vehicula faucibus dui. Ut feugiat placerat eros, eget sodales sem faucibus vitae. Integer iaculis mauris leo, id dictum lorem bibendum vel. Etiam et metus tempus, sollicitudin tellus vel, sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna non libero iaculis imperdiet sed et tortor. In dui nisl, semper sit amet nisi sed, aliquam dapibus est.",
            },
            {
              text: "Vivamus augue magna, lobortis id ex et, semper ultricies dui. Ut dolor sem, placerat at pharetra quis, varius at enim. In facilisis erat eu lectus posuere sagittis ut a sapien. Nullam lacinia lacus nec faucibus egestas. Etiam faucibus vel purus ac bibendum. Vestibulum ipsum massa, suscipit ac condimentum vitae, consequat sit amet felis. Integer libero orci, volutpat nec diam quis, ultrices mattis ligula. Donec at iaculis tellus. Quisque venenatis mi vel condimentum porta. Praesent eu gravida metus. Vestibulum quis porta mauris.",
            },
            {
              subTitle: "Подзаголовок 2",
              text: "Vivamus urna turpis, imperdiet nec pretium at, commodo id libero. Donec vel ex sodales, feugiat erat nec, lobortis ex. Maecenas odio neque, viverra a consectetur quis, feugiat eu urna. Nunc vitae placerat ante, at tempor velit. Curabitur eros leo, consequat a sapien ac, iaculis lacinia elit. In et aliquam justo. Duis nisi tortor, tempus ac venenatis nec, fermentum in augue.",
            },
            {
              text: "Aliquam eu tristique turpis. Vivamus porta ex sit amet tellus euismod euismod. Nullam nec justo libero. Vestibulum accumsan ipsum ex, nec commodo purus posuere id. Sed elementum augue sapien, vulputate pretium ante pellentesque iaculis. Vivamus mauris nunc, vehicula sit amet dui id, bibendum consectetur odio. Maecenas non elementum magna. Praesent at mi in metus tempus lobortis. Nunc ligula mauris, molestie eu sapien eu, viverra dictum massa.",
            },
            {
              subTitle: "Подзаголовок 3",
              text: "Mauris sollicitudin consectetur enim sed venenatis. Aliquam luctus urna vel magna efficitur rhoncus. Maecenas sed quam sapien. Nullam eget felis sit amet nibh vehicula bibendum vehicula non lacus. Sed facilisis congue ex, ut viverra sapien finibus id. Suspendisse sed ligula vulputate, egestas magna nec, luctus nibh. Ut vitae eros non nibh dignissim mattis. In quis enim ac eros egestas luctus quis eu arcu. Duis facilisis urna nisi, ut dictum justo scelerisque sit amet. Ut fringilla viverra congue. Ut dapibus odio at arcu volutpat sodales. Morbi dignissim, lorem at pulvinar tincidunt, lectus orci scelerisque nisl, sed eleifend ipsum dui sed est. Cras lorem diam, mollis vitae dolor quis, aliquet rhoncus neque. Nulla elementum elementum purus a consequat. Ut eu metus pharetra, fermentum velit a, rhoncus velit.",
            },
            {
              subTitle: "Подзаголовок 4",
              text: "Donec malesuada sit amet erat vitae pulvinar. Mauris cursus hendrerit justo sit amet pulvinar. Donec ultricies ex eget eros elementum, vitae lacinia lacus tristique. Fusce sodales ornare nibh nec vestibulum. Vestibulum ultricies dui vitae ex dictum, sit amet fermentum ipsum fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent euismod efficitur tellus. Vivamus arcu nulla, dapibus vitae pretium vitae, consectetur a turpis. Aliquam sed varius neque, sit amet posuere dolor. Pellentesque ornare tristique justo, in pretium risus ultricies sed. Nam sed sapien in nisl blandit dapibus posuere vel ipsum. Aliquam vitae mi non augue eleifend venenatis nec sit amet tortor. Fusce mattis orci cursus semper bibendum. Praesent feugiat consectetur dolor, sit amet lobortis turpis rutrum et. In suscipit, augue nec ullamcorper commodo, eros metus lacinia augue, quis suscipit leo massa non ligula. Donec faucibus interdum sagittis.",
            },
            {
              text: "Etiam aliquet efficitur pellentesque. Sed vehicula euismod mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet ex vel sapien feugiat aliquam. In sed metus pulvinar, pretium neque eu, cursus mi. Etiam ac ornare ante. Nam et nisl risus. Aenean ullamcorper erat eu metus aliquam iaculis. Nullam mattis ligula eleifend turpis tincidunt, dignissim congue ligula finibus. In at euismod justo. Ut porttitor pretium nibh, non malesuada felis. Mauris ut est tellus. Suspendisse at est non risus volutpat tempus. Nunc viverra in est eu ullamcorper. Quisque aliquam tortor mi, in pharetra nibh malesuada sed.",
            },
            {
              subTitle: "Подзаголовок 5",
              text: "Nam eu efficitur nisl, sit amet semper turpis. Proin quis rhoncus leo. Nunc eget orci pharetra, facilisis sapien et, vehicula tellus. Donec aliquam interdum diam sed venenatis. Nullam ut mi ac lectus malesuada accumsan. In quis mi blandit, tempus ex nec, dapibus purus. Duis maximus finibus neque, imperdiet faucibus mauris maximus sit amet. Maecenas sollicitudin eros ut erat pretium, a volutpat lectus blandit. In posuere finibus porttitor. Praesent varius, sapien vel eleifend gravida, mi orci suscipit massa, vel condimentum tellus neque vitae enim.",
            },
            {
              text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. In hac habitasse platea dictumst. Sed iaculis feugiat bibendum. Suspendisse vel egestas justo, non malesuada libero. Aenean tincidunt ullamcorper nunc, ut blandit odio posuere sit amet. Sed at lorem augue. Sed sodales est vel felis finibus finibus. Sed ac tellus non orci faucibus ullamcorper non ac enim. Fusce sed lectus sodales arcu rutrum scelerisque. Mauris turpis elit, dapibus et egestas nec, lobortis sed lectus. Pellentesque venenatis non nunc ac pretium. In pretium vitae velit eget bibendum.",
            },
            {
              text: "Nulla rhoncus dictum viverra. Fusce semper faucibus justo, in blandit nulla mollis id. Nunc quis nulla non dui commodo ultrices. Aenean malesuada erat nec ex vehicula rhoncus. Nam lacinia, lectus sed laoreet commodo, massa metus tincidunt velit, vel feugiat urna est a tortor. Vivamus non gravida metus. Aliquam in condimentum elit. Maecenas a est malesuada, bibendum lacus et, vestibulum est. Etiam pulvinar pretium arcu, non commodo nisi hendrerit a. Fusce placerat odio vitae mi tempus, sed auctor eros mattis. Aenean fringilla viverra libero, vitae posuere metus tempor vitae. Donec vel bibendum nulla, sed interdum mauris. Duis a lectus mattis, vulputate massa sit amet, mollis nibh.",
            },
          ],
        },
      ],
    },
    {
      id: "article-2",
      title: "Статья 2",
      topics: [
        {
          title: "Заголовок 1",
          content: [
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nulla in aliquet tincidunt. Ut vel tortor purus. Curabitur bibendum lectus turpis, ac commodo tortor venenatis tristique. Phasellus blandit eros eget dui varius facilisis. Integer vestibulum elementum elit et finibus. Integer vel aliquam augue, id venenatis nisl. Mauris nec pellentesque nulla. Sed pulvinar, odio sed fringilla cursus, massa felis gravida elit, ut maximus enim lectus id risus. Nunc sagittis interdum tortor, a vestibulum risus mattis vel. Vivamus vitae augue vitae ligula accumsan ornare. In sit amet lorem porta orci placerat suscipit. Aenean vel arcu augue. Nullam id accumsan erat. Integer non molestie nisl.",
            },
            {
              text: "Suspendisse vitae risus ac nunc bibendum sollicitudin. Donec condimentum nibh ante, faucibus sodales ex commodo ut. Quisque accumsan lobortis sapien, eget varius nunc vehicula consequat. Nulla fringilla elit a pulvinar finibus. In elementum, odio eu semper pretium, dolor diam vulputate purus, at commodo eros diam ut felis. Sed facilisis tempor ante id finibus. Fusce blandit ex id odio lobortis, ut suscipit enim eleifend. Duis id consectetur nisl, ut blandit elit. Etiam efficitur ultricies semper. Suspendisse vehicula scelerisque fermentum. Phasellus viverra urna ac accumsan euismod. Cras scelerisque, justo quis tristique tincidunt, nulla mi faucibus purus, at ullamcorper ipsum ex ut magna. Ut rutrum gravida tellus ut varius.",
            },
            {
              subTitle: "Подзаголовок 1",
              text: "Donec rutrum ligula eu erat laoreet, ut molestie orci posuere. Morbi ac viverra mi. Maecenas dui risus, bibendum fringilla fermentum sit amet, pulvinar eget orci. Vivamus non est maximus, iaculis diam ut, consectetur sem. Nunc a sapien id lectus condimentum lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eu pretium nunc, eget sollicitudin nibh.",
            },
            {
              text: "In vel suscipit dui. Morbi efficitur erat est, aliquam facilisis nulla sollicitudin eget. Aenean posuere eros commodo faucibus cursus. Proin gravida aliquam augue, id ullamcorper nisi congue ut. Donec euismod porta nulla at tristique. Quisque at vehicula est. In suscipit gravida metus lobortis elementum. Praesent ac neque ligula.",
            },
            {
              text: "Donec eget euismod lorem. Nunc imperdiet arcu et diam efficitur sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis sapien erat, congue ut enim at, dapibus finibus lorem. Praesent sodales nec ligula non bibendum. Ut et magna pretium, sodales purus ac, vestibulum mauris. Proin eget nisl in augue malesuada rutrum sit amet rutrum est. Praesent rutrum mauris eu eros pulvinar, at posuere erat pulvinar. Curabitur eget felis non ligula tempus pretium ac sed neque. Aliquam at orci aliquet, congue felis sit amet, dictum metus. Suspendisse luctus imperdiet diam quis viverra.",
            },
          ],
        },
        {
          title: "Заголовок 2",
          content: [
            {
              text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            },
            {
              subTitle: "Подзаголовок 1",
              text: "Donec sit amet commodo augue, sit amet commodo dolor. Sed id hendrerit erat. Vestibulum purus leo, pharetra non vehicula ac, elementum in nisi. Donec fringilla efficitur rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec mauris et leo gravida porta. Maecenas tristique lectus a libero aliquet, non rutrum tortor finibus. In mauris libero, consectetur at ultricies tempor, molestie a est. Nullam imperdiet augue vitae purus iaculis malesuada.",
            },
            {
              text: "Sed viverra erat nec nisi molestie, sit amet efficitur dui ullamcorper. Aliquam nec nulla leo. Ut tempus arcu risus, vitae scelerisque arcu ultricies in. Proin vitae fermentum mi. Phasellus commodo egestas nunc et volutpat. Cras nulla tortor, dignissim ac lectus sit amet, pellentesque placerat quam. Aenean luctus quam bibendum nulla hendrerit rhoncus. Fusce quam nibh, ultrices ac justo vel, vehicula faucibus dui. Ut feugiat placerat eros, eget sodales sem faucibus vitae. Integer iaculis mauris leo, id dictum lorem bibendum vel. Etiam et metus tempus, sollicitudin tellus vel, sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna non libero iaculis imperdiet sed et tortor. In dui nisl, semper sit amet nisi sed, aliquam dapibus est.",
            },
            {
              text: "Vivamus augue magna, lobortis id ex et, semper ultricies dui. Ut dolor sem, placerat at pharetra quis, varius at enim. In facilisis erat eu lectus posuere sagittis ut a sapien. Nullam lacinia lacus nec faucibus egestas. Etiam faucibus vel purus ac bibendum. Vestibulum ipsum massa, suscipit ac condimentum vitae, consequat sit amet felis. Integer libero orci, volutpat nec diam quis, ultrices mattis ligula. Donec at iaculis tellus. Quisque venenatis mi vel condimentum porta. Praesent eu gravida metus. Vestibulum quis porta mauris.",
            },
            {
              subTitle: "Подзаголовок 2",
              text: "Vivamus urna turpis, imperdiet nec pretium at, commodo id libero. Donec vel ex sodales, feugiat erat nec, lobortis ex. Maecenas odio neque, viverra a consectetur quis, feugiat eu urna. Nunc vitae placerat ante, at tempor velit. Curabitur eros leo, consequat a sapien ac, iaculis lacinia elit. In et aliquam justo. Duis nisi tortor, tempus ac venenatis nec, fermentum in augue.",
            },
            {
              text: "Aliquam eu tristique turpis. Vivamus porta ex sit amet tellus euismod euismod. Nullam nec justo libero. Vestibulum accumsan ipsum ex, nec commodo purus posuere id. Sed elementum augue sapien, vulputate pretium ante pellentesque iaculis. Vivamus mauris nunc, vehicula sit amet dui id, bibendum consectetur odio. Maecenas non elementum magna. Praesent at mi in metus tempus lobortis. Nunc ligula mauris, molestie eu sapien eu, viverra dictum massa.",
            },
            {
              subTitle: "Подзаголовок 3",
              text: "Mauris sollicitudin consectetur enim sed venenatis. Aliquam luctus urna vel magna efficitur rhoncus. Maecenas sed quam sapien. Nullam eget felis sit amet nibh vehicula bibendum vehicula non lacus. Sed facilisis congue ex, ut viverra sapien finibus id. Suspendisse sed ligula vulputate, egestas magna nec, luctus nibh. Ut vitae eros non nibh dignissim mattis. In quis enim ac eros egestas luctus quis eu arcu. Duis facilisis urna nisi, ut dictum justo scelerisque sit amet. Ut fringilla viverra congue. Ut dapibus odio at arcu volutpat sodales. Morbi dignissim, lorem at pulvinar tincidunt, lectus orci scelerisque nisl, sed eleifend ipsum dui sed est. Cras lorem diam, mollis vitae dolor quis, aliquet rhoncus neque. Nulla elementum elementum purus a consequat. Ut eu metus pharetra, fermentum velit a, rhoncus velit.",
            },
            {
              subTitle: "Подзаголовок 4",
              text: "Donec malesuada sit amet erat vitae pulvinar. Mauris cursus hendrerit justo sit amet pulvinar. Donec ultricies ex eget eros elementum, vitae lacinia lacus tristique. Fusce sodales ornare nibh nec vestibulum. Vestibulum ultricies dui vitae ex dictum, sit amet fermentum ipsum fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent euismod efficitur tellus. Vivamus arcu nulla, dapibus vitae pretium vitae, consectetur a turpis. Aliquam sed varius neque, sit amet posuere dolor. Pellentesque ornare tristique justo, in pretium risus ultricies sed. Nam sed sapien in nisl blandit dapibus posuere vel ipsum. Aliquam vitae mi non augue eleifend venenatis nec sit amet tortor. Fusce mattis orci cursus semper bibendum. Praesent feugiat consectetur dolor, sit amet lobortis turpis rutrum et. In suscipit, augue nec ullamcorper commodo, eros metus lacinia augue, quis suscipit leo massa non ligula. Donec faucibus interdum sagittis.",
            },
            {
              text: "Etiam aliquet efficitur pellentesque. Sed vehicula euismod mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet ex vel sapien feugiat aliquam. In sed metus pulvinar, pretium neque eu, cursus mi. Etiam ac ornare ante. Nam et nisl risus. Aenean ullamcorper erat eu metus aliquam iaculis. Nullam mattis ligula eleifend turpis tincidunt, dignissim congue ligula finibus. In at euismod justo. Ut porttitor pretium nibh, non malesuada felis. Mauris ut est tellus. Suspendisse at est non risus volutpat tempus. Nunc viverra in est eu ullamcorper. Quisque aliquam tortor mi, in pharetra nibh malesuada sed.",
            },
            {
              subTitle: "Подзаголовок 5",
              text: "Nam eu efficitur nisl, sit amet semper turpis. Proin quis rhoncus leo. Nunc eget orci pharetra, facilisis sapien et, vehicula tellus. Donec aliquam interdum diam sed venenatis. Nullam ut mi ac lectus malesuada accumsan. In quis mi blandit, tempus ex nec, dapibus purus. Duis maximus finibus neque, imperdiet faucibus mauris maximus sit amet. Maecenas sollicitudin eros ut erat pretium, a volutpat lectus blandit. In posuere finibus porttitor. Praesent varius, sapien vel eleifend gravida, mi orci suscipit massa, vel condimentum tellus neque vitae enim.",
            },
            {
              text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. In hac habitasse platea dictumst. Sed iaculis feugiat bibendum. Suspendisse vel egestas justo, non malesuada libero. Aenean tincidunt ullamcorper nunc, ut blandit odio posuere sit amet. Sed at lorem augue. Sed sodales est vel felis finibus finibus. Sed ac tellus non orci faucibus ullamcorper non ac enim. Fusce sed lectus sodales arcu rutrum scelerisque. Mauris turpis elit, dapibus et egestas nec, lobortis sed lectus. Pellentesque venenatis non nunc ac pretium. In pretium vitae velit eget bibendum.",
            },
            {
              text: "Nulla rhoncus dictum viverra. Fusce semper faucibus justo, in blandit nulla mollis id. Nunc quis nulla non dui commodo ultrices. Aenean malesuada erat nec ex vehicula rhoncus. Nam lacinia, lectus sed laoreet commodo, massa metus tincidunt velit, vel feugiat urna est a tortor. Vivamus non gravida metus. Aliquam in condimentum elit. Maecenas a est malesuada, bibendum lacus et, vestibulum est. Etiam pulvinar pretium arcu, non commodo nisi hendrerit a. Fusce placerat odio vitae mi tempus, sed auctor eros mattis. Aenean fringilla viverra libero, vitae posuere metus tempor vitae. Donec vel bibendum nulla, sed interdum mauris. Duis a lectus mattis, vulputate massa sit amet, mollis nibh.",
            },
          ],
        },
      ],
    },
    {
      id: "article-3",
      title: "Статья 3",
      topics: [
        {
          title: "Заголовок 1",
          content: [
            {
              text: "Mauris aliquam, dui eget venenatis semper, leo quam venenatis magna, ac porttitor tortor metus in ipsum. Nam facilisis nulla in purus lobortis suscipit. Nunc non justo purus. Aliquam porta lectus mollis finibus euismod. Nunc purus nisi, imperdiet eget risus sed, vestibulum placerat leo. Sed sed tortor vitae lorem pretium congue condimentum at neque. Duis cursus consequat semper. Integer nec tortor pharetra, laoreet quam vel, pharetra libero. Mauris et egestas mauris. Proin sem justo, egestas at ultrices vitae, viverra eu diam. Nunc vel sodales metus. Sed sodales nec leo quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan sit amet felis a ornare. Mauris semper diam ac diam volutpat, vel tempor sem scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            },
            {
              subTitle: "Подзаголовок 1",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nulla in aliquet tincidunt. Ut vel tortor purus. Curabitur bibendum lectus turpis, ac commodo tortor venenatis tristique. Phasellus blandit eros eget dui varius facilisis. Integer vestibulum elementum elit et finibus. Integer vel aliquam augue, id venenatis nisl. Mauris nec pellentesque nulla. Sed pulvinar, odio sed fringilla cursus, massa felis gravida elit, ut maximus enim lectus id risus. Nunc sagittis interdum tortor, a vestibulum risus mattis vel. Vivamus vitae augue vitae ligula accumsan ornare. In sit amet lorem porta orci placerat suscipit. Aenean vel arcu augue. Nullam id accumsan erat. Integer non molestie nisl. Nulla elementum, tortor sit amet accumsan placerat, ante lectus commodo magna, et rutrum elit libero et nulla.",
            },
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis facilisis sapien, vitae elementum purus. Nullam volutpat nulla dignissim, tempor diam tempor, maximus lectus. Phasellus vitae porttitor odio. Ut aliquet ipsum at augue fringilla, ac vulputate orci convallis. Suspendisse at ligula est. Nulla hendrerit, turpis ultricies facilisis tempus, tellus justo sagittis mauris, ac egestas elit velit nec arcu. Curabitur tempor nibh aliquam, facilisis lacus ut, ultricies massa. In bibendum vitae sapien sit amet pellentesque. Proin sed finibus mauris, vel facilisis leo. In a augue venenatis, efficitur nulla rhoncus, cursus tellus. Phasellus ut congue ex.",
            },
            {
              text: "Praesent id mi orci. Pellentesque ut nulla a purus elementum blandit sed et velit. Suspendisse eget tortor tellus. In hac habitasse platea dictumst. Nullam non elit ante. Vestibulum fermentum efficitur turpis quis cursus. Etiam euismod quam lorem, sed pretium lacus convallis sed.",
            },
            {
              text: "Cras non mattis libero. Phasellus ligula ipsum, feugiat vel tortor vitae, tempor varius quam. Donec fringilla viverra enim sit amet tempus. Fusce consectetur diam mauris, vel semper ex vehicula at. Quisque faucibus ornare finibus. Sed eleifend nisl a risus consequat tincidunt. Fusce fringilla auctor lobortis. Ut congue sem eget aliquam imperdiet. Phasellus luctus, dui ac lobortis aliquam, tellus nisl tempor lacus, eget auctor mi lorem ac orci. Nam pellentesque dui vitae malesuada faucibus. Praesent sodales nisi ipsum, at dapibus ante porta sed. Donec egestas purus erat, eu molestie leo sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tempor dolor, et malesuada sapien. Maecenas luctus gravida lectus sed placerat.",
            },
            {
              subTitle: "Подзаголовок 2",
              text: "Etiam porta eleifend pulvinar. Nullam ullamcorper ullamcorper viverra. Vestibulum egestas imperdiet auctor. Mauris congue nisi sit amet cursus iaculis. Proin aliquet aliquet magna, nec laoreet lacus lobortis nec. Maecenas malesuada quis enim vitae maximus. Etiam in egestas dui. Nam nisl arcu, posuere eu venenatis quis, vehicula sit amet ligula. Aliquam dictum et magna nec ornare.",
            },
            {
              text: "Praesent ut congue nibh, eu tempus arcu. Pellentesque lacinia tortor a fringilla ultricies. Sed varius ullamcorper augue non dignissim. Sed volutpat ultricies ante, eu tempor odio venenatis eu. Donec ornare lectus id quam ultricies, eu feugiat risus commodo. Integer non velit dapibus, luctus urna non, finibus diam. Pellentesque viverra nibh in erat mollis, non lobortis velit semper. Aenean magna nisl, feugiat sit amet aliquet et, accumsan sed justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at sollicitudin risus. Aliquam erat volutpat. Aliquam diam nunc, hendrerit suscipit convallis et, gravida vitae ipsum. Praesent purus dolor, iaculis quis viverra in, rhoncus vitae dui. Aenean sit amet feugiat enim.",
            },
          ],
        },
        {
          title: "Заголовок 2",
          content: [
            {
              text: "Nullam vulputate malesuada tortor et tincidunt. Donec tincidunt, ligula vitae eleifend tincidunt, arcu sem rhoncus purus, sed sollicitudin metus orci nec orci. Nunc rutrum elementum tellus sit amet vestibulum. Fusce non nibh ut neque iaculis aliquam. Morbi sollicitudin, erat ac dictum semper, nunc enim auctor purus, id ultricies lectus erat malesuada nunc. Aliquam finibus aliquet velit at molestie. Curabitur dictum ipsum lorem, in dignissim erat gravida interdum. Morbi rhoncus bibendum hendrerit. Pellentesque vel leo tempus, rhoncus metus in, rutrum ex. Vivamus non velit eget magna dignissim pretium. Integer nunc orci, mollis id enim nec, posuere tempus magna. Sed quis ipsum sapien. Quisque feugiat nisi sit amet tempor varius. Quisque feugiat ullamcorper eros eu interdum. Curabitur vitae rutrum eros, sit amet tincidunt sem.",
            },
            {
              text: "Etiam sodales hendrerit arcu facilisis maximus. Maecenas vel efficitur odio. Nulla ac nisi quam. Morbi convallis et tellus nec consectetur. Quisque fringilla turpis elit, sed cursus elit tempor in. Sed finibus ipsum et ornare maximus. Duis et nibh feugiat, placerat urna eu, rhoncus metus. Sed dui lacus, tempor et elit nec, bibendum fermentum lacus. Cras at congue turpis. Suspendisse potenti. Nulla ac ipsum accumsan, volutpat purus ut, tristique augue. Nunc eu odio enim.",
            },
            {
              text: "Phasellus luctus neque massa, ac egestas erat vestibulum vel. Sed rhoncus imperdiet placerat. Donec bibendum sem sed tincidunt pharetra. In eget aliquam quam. Pellentesque placerat pellentesque erat nec dignissim. Nullam ante enim, mattis eu venenatis id, scelerisque ac purus. In hac habitasse platea dictumst. Fusce tincidunt lacus et diam sollicitudin, at sagittis tortor consectetur. Etiam sit amet dui at quam dictum gravida. Donec dolor sem, porttitor quis commodo a, laoreet et ligula. In egestas neque vel lectus congue, ac porta mauris ornare. Nullam tincidunt lectus quam, ut tincidunt felis rutrum eu. Nullam at tincidunt metus, bibendum suscipit dui. Phasellus dolor risus, vehicula nec neque ut, dignissim pretium massa. Integer a justo odio.",
            },
            {
              text: "Mauris vitae tempor ante. Donec iaculis nisl placerat mi tempus, non molestie ligula porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mi sit amet ipsum sodales imperdiet vel vel lectus. Maecenas mauris magna, auctor et sem eget, condimentum mattis odio. Morbi laoreet turpis luctus lectus egestas euismod. Vestibulum tempus ornare metus quis euismod. Pellentesque vitae hendrerit metus. Integer nec erat eu est auctor mattis id sed eros.",
            },
          ],
        },
        {
          title: "Заголовок 3",
          content: [
            {
              text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            },
            {
              subTitle: "Подзаголовок 1",
              text: "Donec sit amet commodo augue, sit amet commodo dolor. Sed id hendrerit erat. Vestibulum purus leo, pharetra non vehicula ac, elementum in nisi. Donec fringilla efficitur rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec mauris et leo gravida porta. Maecenas tristique lectus a libero aliquet, non rutrum tortor finibus. In mauris libero, consectetur at ultricies tempor, molestie a est. Nullam imperdiet augue vitae purus iaculis malesuada.",
            },
            {
              text: "Sed viverra erat nec nisi molestie, sit amet efficitur dui ullamcorper. Aliquam nec nulla leo. Ut tempus arcu risus, vitae scelerisque arcu ultricies in. Proin vitae fermentum mi. Phasellus commodo egestas nunc et volutpat. Cras nulla tortor, dignissim ac lectus sit amet, pellentesque placerat quam. Aenean luctus quam bibendum nulla hendrerit rhoncus. Fusce quam nibh, ultrices ac justo vel, vehicula faucibus dui. Ut feugiat placerat eros, eget sodales sem faucibus vitae. Integer iaculis mauris leo, id dictum lorem bibendum vel. Etiam et metus tempus, sollicitudin tellus vel, sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna non libero iaculis imperdiet sed et tortor. In dui nisl, semper sit amet nisi sed, aliquam dapibus est.",
            },
            {
              text: "Vivamus augue magna, lobortis id ex et, semper ultricies dui. Ut dolor sem, placerat at pharetra quis, varius at enim. In facilisis erat eu lectus posuere sagittis ut a sapien. Nullam lacinia lacus nec faucibus egestas. Etiam faucibus vel purus ac bibendum. Vestibulum ipsum massa, suscipit ac condimentum vitae, consequat sit amet felis. Integer libero orci, volutpat nec diam quis, ultrices mattis ligula. Donec at iaculis tellus. Quisque venenatis mi vel condimentum porta. Praesent eu gravida metus. Vestibulum quis porta mauris.",
            },
            {
              subTitle: "Подзаголовок 2",
              text: "Vivamus urna turpis, imperdiet nec pretium at, commodo id libero. Donec vel ex sodales, feugiat erat nec, lobortis ex. Maecenas odio neque, viverra a consectetur quis, feugiat eu urna. Nunc vitae placerat ante, at tempor velit. Curabitur eros leo, consequat a sapien ac, iaculis lacinia elit. In et aliquam justo. Duis nisi tortor, tempus ac venenatis nec, fermentum in augue.",
            },
            {
              text: "Aliquam eu tristique turpis. Vivamus porta ex sit amet tellus euismod euismod. Nullam nec justo libero. Vestibulum accumsan ipsum ex, nec commodo purus posuere id. Sed elementum augue sapien, vulputate pretium ante pellentesque iaculis. Vivamus mauris nunc, vehicula sit amet dui id, bibendum consectetur odio. Maecenas non elementum magna. Praesent at mi in metus tempus lobortis. Nunc ligula mauris, molestie eu sapien eu, viverra dictum massa.",
            },
            {
              subTitle: "Подзаголовок 3",
              text: "Mauris sollicitudin consectetur enim sed venenatis. Aliquam luctus urna vel magna efficitur rhoncus. Maecenas sed quam sapien. Nullam eget felis sit amet nibh vehicula bibendum vehicula non lacus. Sed facilisis congue ex, ut viverra sapien finibus id. Suspendisse sed ligula vulputate, egestas magna nec, luctus nibh. Ut vitae eros non nibh dignissim mattis. In quis enim ac eros egestas luctus quis eu arcu. Duis facilisis urna nisi, ut dictum justo scelerisque sit amet. Ut fringilla viverra congue. Ut dapibus odio at arcu volutpat sodales. Morbi dignissim, lorem at pulvinar tincidunt, lectus orci scelerisque nisl, sed eleifend ipsum dui sed est. Cras lorem diam, mollis vitae dolor quis, aliquet rhoncus neque. Nulla elementum elementum purus a consequat. Ut eu metus pharetra, fermentum velit a, rhoncus velit.",
            },
            {
              subTitle: "Подзаголовок 4",
              text: "Donec malesuada sit amet erat vitae pulvinar. Mauris cursus hendrerit justo sit amet pulvinar. Donec ultricies ex eget eros elementum, vitae lacinia lacus tristique. Fusce sodales ornare nibh nec vestibulum. Vestibulum ultricies dui vitae ex dictum, sit amet fermentum ipsum fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent euismod efficitur tellus. Vivamus arcu nulla, dapibus vitae pretium vitae, consectetur a turpis. Aliquam sed varius neque, sit amet posuere dolor. Pellentesque ornare tristique justo, in pretium risus ultricies sed. Nam sed sapien in nisl blandit dapibus posuere vel ipsum. Aliquam vitae mi non augue eleifend venenatis nec sit amet tortor. Fusce mattis orci cursus semper bibendum. Praesent feugiat consectetur dolor, sit amet lobortis turpis rutrum et. In suscipit, augue nec ullamcorper commodo, eros metus lacinia augue, quis suscipit leo massa non ligula. Donec faucibus interdum sagittis.",
            },
            {
              text: "Etiam aliquet efficitur pellentesque. Sed vehicula euismod mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet ex vel sapien feugiat aliquam. In sed metus pulvinar, pretium neque eu, cursus mi. Etiam ac ornare ante. Nam et nisl risus. Aenean ullamcorper erat eu metus aliquam iaculis. Nullam mattis ligula eleifend turpis tincidunt, dignissim congue ligula finibus. In at euismod justo. Ut porttitor pretium nibh, non malesuada felis. Mauris ut est tellus. Suspendisse at est non risus volutpat tempus. Nunc viverra in est eu ullamcorper. Quisque aliquam tortor mi, in pharetra nibh malesuada sed.",
            },
            {
              subTitle: "Подзаголовок 5",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nulla in aliquet tincidunt. Ut vel tortor purus. Curabitur bibendum lectus turpis, ac commodo tortor venenatis tristique. Phasellus blandit eros eget dui varius facilisis. Integer vestibulum elementum elit et finibus. Integer vel aliquam augue, id venenatis nisl. Mauris nec pellentesque nulla. Sed pulvinar, odio sed fringilla cursus, massa felis gravida elit, ut maximus enim lectus id risus. Nunc sagittis interdum tortor, a vestibulum risus mattis vel. Vivamus vitae augue vitae ligula accumsan ornare. In sit amet lorem porta orci placerat suscipit. Aenean vel arcu augue. Nullam id accumsan erat. Integer non molestie nisl. Nulla elementum, tortor sit amet accumsan placerat, ante lectus commodo magna, et rutrum elit libero et nulla.",
            },
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis facilisis sapien, vitae elementum purus. Nullam volutpat nulla dignissim, tempor diam tempor, maximus lectus. Phasellus vitae porttitor odio. Ut aliquet ipsum at augue fringilla, ac vulputate orci convallis. Suspendisse at ligula est. Nulla hendrerit, turpis ultricies facilisis tempus, tellus justo sagittis mauris, ac egestas elit velit nec arcu. Curabitur tempor nibh aliquam, facilisis lacus ut, ultricies massa. In bibendum vitae sapien sit amet pellentesque. Proin sed finibus mauris, vel facilisis leo. In a augue venenatis, efficitur nulla rhoncus, cursus tellus. Phasellus ut congue ex.",
            },
            {
              text: "Praesent id mi orci. Pellentesque ut nulla a purus elementum blandit sed et velit. Suspendisse eget tortor tellus. In hac habitasse platea dictumst. Nullam non elit ante. Vestibulum fermentum efficitur turpis quis cursus. Etiam euismod quam lorem, sed pretium lacus convallis sed.",
            },
            {
              text: "Cras non mattis libero. Phasellus ligula ipsum, feugiat vel tortor vitae, tempor varius quam. Donec fringilla viverra enim sit amet tempus. Fusce consectetur diam mauris, vel semper ex vehicula at. Quisque faucibus ornare finibus. Sed eleifend nisl a risus consequat tincidunt. Fusce fringilla auctor lobortis. Ut congue sem eget aliquam imperdiet. Phasellus luctus, dui ac lobortis aliquam, tellus nisl tempor lacus, eget auctor mi lorem ac orci. Nam pellentesque dui vitae malesuada faucibus. Praesent sodales nisi ipsum, at dapibus ante porta sed. Donec egestas purus erat, eu molestie leo sodales eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu tempor dolor, et malesuada sapien. Maecenas luctus gravida lectus sed placerat.",
            },
            {
              subTitle: "Подзаголовок 6",
              text: "Donec malesuada sit amet erat vitae pulvinar. Mauris cursus hendrerit justo sit amet pulvinar. Donec ultricies ex eget eros elementum, vitae lacinia lacus tristique. Fusce sodales ornare nibh nec vestibulum. Vestibulum ultricies dui vitae ex dictum, sit amet fermentum ipsum fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent euismod efficitur tellus. Vivamus arcu nulla, dapibus vitae pretium vitae, consectetur a turpis. Aliquam sed varius neque, sit amet posuere dolor. Pellentesque ornare tristique justo, in pretium risus ultricies sed. Nam sed sapien in nisl blandit dapibus posuere vel ipsum. Aliquam vitae mi non augue eleifend venenatis nec sit amet tortor. Fusce mattis orci cursus semper bibendum. Praesent feugiat consectetur dolor, sit amet lobortis turpis rutrum et. In suscipit, augue nec ullamcorper commodo, eros metus lacinia augue, quis suscipit leo massa non ligula. Donec faucibus interdum sagittis.",
            },
            {
              text: "Etiam aliquet efficitur pellentesque. Sed vehicula euismod mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet ex vel sapien feugiat aliquam. In sed metus pulvinar, pretium neque eu, cursus mi. Etiam ac ornare ante. Nam et nisl risus. Aenean ullamcorper erat eu metus aliquam iaculis. Nullam mattis ligula eleifend turpis tincidunt, dignissim congue ligula finibus. In at euismod justo. Ut porttitor pretium nibh, non malesuada felis. Mauris ut est tellus. Suspendisse at est non risus volutpat tempus. Nunc viverra in est eu ullamcorper. Quisque aliquam tortor mi, in pharetra nibh malesuada sed.",
            },
            {
              subTitle: "Подзаголовок 7",
              text: "Nam eu efficitur nisl, sit amet semper turpis. Proin quis rhoncus leo. Nunc eget orci pharetra, facilisis sapien et, vehicula tellus. Donec aliquam interdum diam sed venenatis. Nullam ut mi ac lectus malesuada accumsan. In quis mi blandit, tempus ex nec, dapibus purus. Duis maximus finibus neque, imperdiet faucibus mauris maximus sit amet. Maecenas sollicitudin eros ut erat pretium, a volutpat lectus blandit. In posuere finibus porttitor. Praesent varius, sapien vel eleifend gravida, mi orci suscipit massa, vel condimentum tellus neque vitae enim.",
            },
            {
              text: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. In hac habitasse platea dictumst. Sed iaculis feugiat bibendum. Suspendisse vel egestas justo, non malesuada libero. Aenean tincidunt ullamcorper nunc, ut blandit odio posuere sit amet. Sed at lorem augue. Sed sodales est vel felis finibus finibus. Sed ac tellus non orci faucibus ullamcorper non ac enim. Fusce sed lectus sodales arcu rutrum scelerisque. Mauris turpis elit, dapibus et egestas nec, lobortis sed lectus. Pellentesque venenatis non nunc ac pretium. In pretium vitae velit eget bibendum.",
            },
            {
              text: "Nulla rhoncus dictum viverra. Fusce semper faucibus justo, in blandit nulla mollis id. Nunc quis nulla non dui commodo ultrices. Aenean malesuada erat nec ex vehicula rhoncus. Nam lacinia, lectus sed laoreet commodo, massa metus tincidunt velit, vel feugiat urna est a tortor. Vivamus non gravida metus. Aliquam in condimentum elit. Maecenas a est malesuada, bibendum lacus et, vestibulum est. Etiam pulvinar pretium arcu, non commodo nisi hendrerit a. Fusce placerat odio vitae mi tempus, sed auctor eros mattis. Aenean fringilla viverra libero, vitae posuere metus tempor vitae. Donec vel bibendum nulla, sed interdum mauris. Duis a lectus mattis, vulputate massa sit amet, mollis nibh.",
            },
          ],
        },
        {
          title: "Заголовок 4",
          content: [
            {
              text: "Donec sit amet commodo augue, sit amet commodo dolor. Sed id hendrerit erat. Vestibulum purus leo, pharetra non vehicula ac, elementum in nisi. Donec fringilla efficitur rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec mauris et leo gravida porta. Maecenas tristique lectus a libero aliquet, non rutrum tortor finibus. In mauris libero, consectetur at ultricies tempor, molestie a est. Nullam imperdiet augue vitae purus iaculis malesuada.",
            },
            {
              text: "Sed viverra erat nec nisi molestie, sit amet efficitur dui ullamcorper. Aliquam nec nulla leo. Ut tempus arcu risus, vitae scelerisque arcu ultricies in. Proin vitae fermentum mi. Phasellus commodo egestas nunc et volutpat. Cras nulla tortor, dignissim ac lectus sit amet, pellentesque placerat quam. Aenean luctus quam bibendum nulla hendrerit rhoncus. Fusce quam nibh, ultrices ac justo vel, vehicula faucibus dui. Ut feugiat placerat eros, eget sodales sem faucibus vitae. Integer iaculis mauris leo, id dictum lorem bibendum vel. Etiam et metus tempus, sollicitudin tellus vel, sollicitudin est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel urna non libero iaculis imperdiet sed et tortor. In dui nisl, semper sit amet nisi sed, aliquam dapibus est.",
            },
            {
              text: "Vivamus augue magna, lobortis id ex et, semper ultricies dui. Ut dolor sem, placerat at pharetra quis, varius at enim. In facilisis erat eu lectus posuere sagittis ut a sapien. Nullam lacinia lacus nec faucibus egestas. Etiam faucibus vel purus ac bibendum. Vestibulum ipsum massa, suscipit ac condimentum vitae, consequat sit amet felis. Integer libero orci, volutpat nec diam quis, ultrices mattis ligula. Donec at iaculis tellus. Quisque venenatis mi vel condimentum porta. Praesent eu gravida metus. Vestibulum quis porta mauris.",
            },
            {
              text: "Vivamus urna turpis, imperdiet nec pretium at, commodo id libero. Donec vel ex sodales, feugiat erat nec, lobortis ex. Maecenas odio neque, viverra a consectetur quis, feugiat eu urna. Nunc vitae placerat ante, at tempor velit. Curabitur eros leo, consequat a sapien ac, iaculis lacinia elit. In et aliquam justo. Duis nisi tortor, tempus ac venenatis nec, fermentum in augue.",
            },
          ],
        },
      ],
    },
  ],
  footer: {
    copyright: "Copyright © 2023 My Website. Все права защищены.",
  },
};

const localizations: Localization[] = [eng, ru];

export default localizations;
