class Celebrity
{
  constructor()
  {

  }

  setId(id)
  {
      this.id=id;
  }

  getId()
  {
      return this.id;
  }

  setFirstName(firstName)
  {
      this.firstName = firstName;
  }

  getFirstName()
  {
      return this.firstName;
  }

  setLastName(lastName)
  {
      this.lastName = lastName;
  }

  getLastName()
  {
      return this.lastName;
  }
  setProfession(profession)
  {
      this.profession = profession;
  }

  getProfession()
  {
      return this.profession;
  }
  
  setProfile(profile)
  {
      this.profile = profile;
  }

  getProfile()
  {
      return this.profile;
  }
 
}

module.exports  = new Celebrity();

