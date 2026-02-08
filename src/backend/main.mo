import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    createdAt : Time.Time;
  };

  let submissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, subject : Text, message : Text) : async Bool {
    let submission : ContactSubmission = {
      name;
      email;
      subject;
      message;
      createdAt = Time.now();
    };
    submissions.add(submission);
    true;
  };

  public shared ({ caller }) func getRecentSubmissions() : async [ContactSubmission] {
    submissions.toArray();
  };
};
