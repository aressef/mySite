<?php include('form-process.php'); ?>
<div class="contact">
  <h1 class="contact-h1">Let's Connect</h1>
  <form class="contact-form" action='<?= htmlspecialchars($_SERVER["PHP_SELF"]) ?>' method="post">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" name="name" placeholder="Enter name" value="<?= $name ?>">
      <span class="error"><?= $name_error ?></span>
    </div>
    <div class="form-group">
      <label for="email-address">Email Address</label>
      <input type="text" class="form-control" name="email" placeholder="Enter email" value="<?= $email ?>">
      <span class="error"><?= $email_error ?></span>
    </div>
    <div class="form-group">
      <label for="subject">Subject</label>
      <input type="text" class="form-control" name="subject" placeholder="Enter subject" value="<?= $subject ?>">
      <span class="error"><?= $subject_error ?></span>
    </div>
    <div class="form-group">
      <label for="comments">Comments</label>
      <textarea type="text" class="form-control" name="message" rows="6" placeholder="What would you like to tell me?" value="<?= $message ?>"></textarea>
      <span class="error"><?= $message_error ?></span>
    </div>
    <button type="submit" class="btn btn-primary">Send</button>
    <div class="success"><?= $success; ?></div>
  </form>
</div>
