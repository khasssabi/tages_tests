const formData = require("../data/formData");

class MainPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.aboutLink = this.page.getByLabel("О компании");
    this.academyLink = this.page.getByLabel("Академия");
    this.eventsLink = this.page.getByLabel("Мероприятия");
    this.blogLink = this.page
      .getByRole("navigation")
      .getByRole("link", { name: "Блог" });
    this.vacanciesLink = this.page
      .getByRole("navigation")
      .getByRole("link", { name: "Вакансии" });
    this.contactsLink = this.page.getByLabel("Контакты");
    this.logo = this.page.locator(".header__logo");

    // Inquiry Links
    this.phoneNumber = page.locator('a[href="tel:+74956402394"]').nth(0);
    this.form = this.page.getByRole("link", { name: "Форма запроса" });
    this.submitButton = this.page.getByRole("button", { name: "Отправить" });

    // Form
    this.nameField = this.page.getByRole("textbox", { name: "Имя*" });
    this.phoneField = this.page.getByRole("textbox", { name: "Телефон*" });
    this.companyField = this.page.getByRole("textbox", { name: "Компания" });
    this.emailField = this.page.getByRole("textbox", { name: "Почта*" });
    this.commentField = this.page.getByRole("textbox", { name: "Комментарий" });

    // Partners Links
    this.partnerRolf = this.page.getByRole("link", { name: "Рольф" });
    this.partnerMedsi = this.page.getByRole("link", { name: "Медси" });
    this.partnerOmni360 = this.page.getByRole("link", { name: "omniboard360" });
    this.partnerIngos = this.page.getByRole("link", { name: "Ингосстрах" });
    this.partnerMvideo = this.page.getByRole("link", {
      name: "М.ВидеоЭльдорадо",
    });
    this.partnerLemanaPro = this.page.getByRole("link", {
      name: "Леруа Мерлен",
    });
    this.partnerTn = this.page.getByRole("link", { name: "Технониколь" });

    // Footer Links
    this.companyPhone = this.page.getByRole("link", {
      name: "Телефон компании",
    });
    this.companyEmail = this.page.getByRole("link", {
      name: "Почтовый адрес компании",
    });
    this.mediaPhone = this.page.getByRole("link", {
      name: "Телефон пресс-службы",
    });
    this.mediaEmail = this.page.getByRole("link", {
      name: "Почтовый адрес пресс-службы",
    });
    this.hrEmail = this.page.getByRole("link", {
      name: "Почтовый адрес HR отдела",
    });
    this.requisites = this.page.getByRole("link", { name: "Реквизиты" });
    this.socialTme = this.page
      .getByRole("link", { name: "Tages Telegram" })
      .locator("path");
    this.socialVk = this.page
      .getByRole("link", { name: "Tages VKontakte" })
      .locator("path")
      .first();
    this.socialYoutube = this.page
      .getByRole("link", { name: "YouTube" })
      .locator("path")
      .nth(1);

    // Social Media
    this.telegramLink = this.page.getByRole("link", { name: "Tages Telegram" });
    this.vkLink = this.page.getByRole("link", { name: "Tages VKontakte" });
    this.youtubeLink = this.page.getByRole("link", { name: "YouTube" });
  }

  // Navigation Methods
  async navigate() {
    await this.page.goto("/", { timeout: 10000, waitUntil: "networkidle" });
  }

  async navigateToAbout() {
    await this.aboutLink.click();
  }

  async navigateToAcademy() {
    await this.academyLink.click();
  }

  async navigateToEvents() {
    await this.eventsLink.click();
  }

  async navigateToBlog() {
    await this.blogLink.click();
  }

  async navigateToVacancies() {
    await this.vacanciesLink.click();
  }

  async navigateToContacts() {
    await this.contactsLink.click();
  }

  async clickLogo() {
    await this.logo.click();
  }

  async clickForm() {
    await this.form.click();
  }

  async navigateToRequisites() {
    await this.requisites.click({ timeout: 60000, waitUntil: "networkidle" });
  }

  // Fill out the Form
  async fillForm(dataOrEmail) {
    if (typeof dataOrEmail === "string") {
      // Only email is dynamic when input is a string
      await this.nameField.fill("Тестова");
      await this.phoneField.fill("9999999999");
      await this.companyField.fill("Autotest Inc");
      await this.emailField.fill(dataOrEmail);
      await this.commentField.fill("Test! Don't pay attention!");
    } else if (typeof dataOrEmail === "object") {
      // All data fields are dynamically passed when input is an object
      await this.nameField.fill(dataOrEmail.name);
      await this.phoneField.fill(dataOrEmail.phone);
      await this.companyField.fill(dataOrEmail.company);
      await this.emailField.fill(dataOrEmail.email);
      await this.commentField.fill(dataOrEmail.comment);
    }
  }

  // Submit Form
  async submitForm() {
    await this.submitButton.click();
  }
}
module.exports = MainPage;
