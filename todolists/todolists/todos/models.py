from django.db import models


class Todo(models.Model):

    name = models.CharField(max_length=60)
    is_done = models.BooleanField(default=False)

    def __unicode__(self):
        return self.name
