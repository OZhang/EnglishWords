
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace text2jsonEnglishWords
{
  [Serializable]
  public class Group
  {
    public Group()
    {
      WordList = new List<Word>();
      Name = string.Empty;
    }
    [JsonProperty("Name")]
    public string Name { get; set; }
    [JsonProperty("Words")]
    public List<Word> WordList { get; set; }
  }

  public class Word
  {
    [JsonProperty("English")]
    public string English { get; set; }
    [JsonProperty("PhoneticSymbols")]
    public string PhoneticSymbols { get; set; }
    [JsonProperty("Chinese")]
    public string Chinese { get; set; }
  }
}
