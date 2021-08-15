using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using text2jsonEnglishWords.Properties;

namespace text2jsonEnglishWords
{
  class Program
  {
    static void Main(string[] args)
    {
      var textFile = Resources._8_1;
      string[] stringSeparators = new string[] { "\r\n" };
      var lines = textFile.Split(stringSeparators, StringSplitOptions.None).ToList();
      var list = new List<Group>();
      Group group = null;
      //lines.ForEach(l =>
      foreach(var line in lines)
      {
        var word = line.Split('/');
        if (word.Length != 4)
          continue;

        if (group == null)
        {
          group = new Group();
        }
        if (string.IsNullOrWhiteSpace(group.Name))
        {
          group.Name = word[0];
        }
        else if (!group.Name.Equals(word[0]))
        {
          list.Add(group);
          group = new Group();
        }

        var newWord = new Word()
        {
          Chinese = word[2],
          English = word[1],
          PhoneticSymbols = word[3]
        };
        group.WordList.Add(newWord);
      }

      list.Add(group);
      var output = JsonConvert.SerializeObject(list);
      File.WriteAllText(@"../../../../src/assets/json/8_1.json", output);
    }
  }
}
