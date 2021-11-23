# Generated by Django 3.1.2 on 2020-11-30 18:27

from django.db import migrations, models
import django.db.models.deletion
import home.models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='template',
            name='mediaFiles',
        ),
        migrations.CreateModel(
            name='TemplateMediaFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mediaFiles', models.FileField(blank=True, null=True, upload_to=home.models.get_file_path)),
                ('template_Id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.template')),
            ],
        ),
    ]
